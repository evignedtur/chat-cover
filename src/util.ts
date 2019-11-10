import { useEffect, useRef } from 'react';
import { Config } from './models';

export const useInterval = (callback: any, delay: number, deps?: any) => {
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
		[delay, deps]
	);
};

export const loadConfig = () => {
	if (!localStorage.getItem('CONFIG')) {
		resetConfig();
	}
	return JSON.parse(localStorage.getItem('CONFIG')!) as Config;
};

export const saveConfig = (config: Config) => {
	localStorage.clear();
	localStorage.setItem('CONFIG', JSON.stringify(config));
};

export const resetConfig = (event?: any) => {
	if(event){
		event.preventDefault();
	}
	saveConfig({
		currentlyPlayingPrefix: 'Currently playing',
		includeCurrentlyPlaying: false,
		color1: 'rgb(155,31,31)',
		color2: 'rgb(194,76,76)',
		nickname: 'Nickname',
		server: 'Server',
		spotifyToken: ''
	});
};
