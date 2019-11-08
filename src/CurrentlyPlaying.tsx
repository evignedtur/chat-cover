import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios';
import ScrollText from 'react-scroll-text';
import { SpotifyCurrentlyPlayingResult } from './SpotifyCurrentlyPlayingResult';
import {loadConfig, saveConfig} from './admin/admin';

interface CurrentlyPlaying {
	width: number;
}

const CurrentlyPlaying: React.FC<CurrentlyPlaying> = props => {
	const SpotifyService = () => {
		const [isPlaying, setIsPlaying] = useState<SpotifyCurrentlyPlayingResult>();

		useInterval(() => {
			if(loadConfig().includeCurrentlyPlaying){
				setPlay(true);
				Axios.get<SpotifyCurrentlyPlayingResult>('https://api.spotify.com/v1/me/player/currently-playing', {
					headers: { Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN') }
				}).then(response => {
					if (!isPlaying) {
						setIsPlaying(response.data);
					} else if (response.data.item && isPlaying.item && response.data.item.name !== isPlaying.item.name) {
						setIsPlaying(response.data);
					}
				}).catch(() => {
					deleteSpotifyData();
					saveConfig({
						...loadConfig(),
						includeCurrentlyPlaying: false
					});
				});
			}
		}, 5000);

		return isPlaying;
	};

	const [play, setPlay] = useState(loadConfig().includeCurrentlyPlaying);
	const config = loadConfig();
	const service = SpotifyService();
	if (!play || !service || !config.includeCurrentlyPlaying) {
		return null;
	} else
		return (
			<div className="currently-playing" style={{ width: `calc((100% - ${props.width}px) - 100px)` }}>
				<ScrollText>
					{service.is_playing &&
						service.item &&
						service.item.name &&
						service.item.artists &&
						`${config.currentlyPlayingPrefix ? config.currentlyPlayingPrefix + ': ' : ''} ${service.item.artists.map(
							artist => artist.name
						).join(', ')} - ${service.item.name}`}
				</ScrollText>
			</div>
		);
};

const useInterval = (callback: any, delay: number) => {
	const savedCallback = useRef(callback);
	useEffect(
		() => {
			savedCallback.current = callback;
		},
		[callback]
	);

	useEffect(
		() => {
			function tick() {
				savedCallback!.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		},
		[delay]
	);
};

export const deleteSpotifyData = () => {
	localStorage.removeItem('ACCESS_TOKEN');
	localStorage.removeItem('EXPIRES_IN');
	localStorage.removeItem('TOKEN_TYPE');
}

export default CurrentlyPlaying;
