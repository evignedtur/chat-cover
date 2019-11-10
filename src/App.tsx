import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Switch, Route, useParams, HashRouter, Redirect } from 'react-router-dom';
import CurrentlyPlaying from './CurrentlyPlaying';
import Admin from './admin';
import { loadConfig, saveConfig } from './util';

const App: React.FC = () => {
	return (
		<HashRouter basename="/">
			<div className="App full-height">
				<Switch>
					<Route path="/" exact children={<Admin />} />
					<Route path="/admin" children={<Admin />} />
					<Route path="/spotify-token/:token" children={<SpotifyTokenHandler />} />
					<Route path="/:server/:nickname/:token?" children={<Out />} />
				</Switch>
			</div>
		</HashRouter>
	);
};

const Out = () => {
	let { server, nickname, token } = useParams();
	const ref = useRef<HTMLDivElement>(null);

	const [width, setWidth] = useState(0);
	useEffect(() => {
		const width = ref && ref.current && ref.current.offsetWidth ? ref.current.offsetWidth : 0;
		setWidth(width);
	}, [ref]);

	saveConfig({
		...loadConfig(),
		server,
		nickname
	});
	return (
		<div className="cover full-height">
			<div className="top">
				<div className="text" ref={ref}>
					<span>
						{server} / {nickname}
					</span>
				</div>
				<CurrentlyPlaying width={width} token={token} />
			</div>

			<div className="area" />
		</div>
	);
};

const SpotifyTokenHandler = () => {
	let { token } = useParams();
	saveConfig({
		...loadConfig(),
		spotifyToken: token || ''
	});
	return <Redirect to="/admin" />;
};

export default App;
