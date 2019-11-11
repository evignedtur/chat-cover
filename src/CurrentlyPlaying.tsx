import React, { useEffect, useState } from 'react';
import ScrollText from 'react-scroll-text';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from './util';
import { CurrentlyPlayingProps, SpotifyCurrentlyPlayingResult } from './models';
import Axios, { AxiosResponse } from 'axios';

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = props => {
	const [service, setService] = useState<SpotifyCurrentlyPlayingResult>({
		is_playing: false
	});
	const [token, setToken] = useState('');

	useEffect(() => {
		if (!token) {
			Axios.get(`https://evig-nedtur.herokuapp.com/session/${props.token}`).then(result => {
				setToken(result.data.SpotifyToken);
			});
		}
	}, [props.token, token]);

	useInterval(
		() => {
			Axios.get(`https://evig-nedtur.herokuapp.com/session/${props.token}`).then(result => {
				setToken(result.data.SpotifyToken);
			});
		},
		1000 * 60 * 3,
		[props.token, token]
	);

	const updateSong = (result: AxiosResponse<SpotifyCurrentlyPlayingResult>) => {
		return (
			service &&
			((service.item && result.data && result.data.item && service.item.name !== result.data.item.name) ||
				service.is_playing !== result.data.is_playing)
		);
	};

	const GetSpotifyCurrentlyPlaying = async () => {
		const result = await Axios.get<SpotifyCurrentlyPlayingResult>('https://api.spotify.com/v1/me/player/currently-playing', {
			headers: { Authorization: `Bearer ${token}` }
		});
		if (updateSong(result)) {
			setService(result.data);
		}
	};

	useInterval(() => {
		if (token) {
			GetSpotifyCurrentlyPlaying().catch(error => {
				console.error(error);
			});
		}
	}, 5000);

	return (
		<AnimatePresence>
			{service && service.is_playing && (
				<motion.div
					initial={{ translateY: '-100%' }}
					animate={{ translateY: '0%' }}
					exit={{ translateY: '-100%' }}
					className="currently-playing"
					style={{ width: `calc((100% - ${props.width}px) - 100px)` }}
				>
					<ScrollText>
						{service.is_playing &&
							service.item &&
							service.item.name &&
							service.item.artists &&
							`Currently playing: ${service.item.artists.map(artist => artist.name).join(', ')} - ${service.item.name}`}
					</ScrollText>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CurrentlyPlaying;
