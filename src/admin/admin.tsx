import React, { ChangeEvent, useState } from 'react';
import useForm from 'react-hook-form';

interface Config {
	currentlyPlayingPrefix?: string;
	color1?: string;
	color2?: string;
	includeCurrentlyPlaying?: boolean;
	server?: string;
	nickname?: string;
}

const Admin: React.FC = () => {
	const URL = 'https://accounts.spotify.com/authorize';
	const CLIENT_ID = '85595b738deb4f078eb60bf45c542d45';
	const REDIRECT_URI = `http://localhost:3000/#/callback`;
	const SCOPES = 'user-read-currently-playing';

	const { register, handleSubmit } = useForm();

	const [config, setConfig] = useState(loadConfig());

	const onSubmit = (data: any) => {
		const includeCurrentlyPlaying = data.includeCurrentlyPlaying === 'true';
		const fixedData = { ...data, includeCurrentlyPlaying };
		setConfig(fixedData);
		saveConfig(fixedData);
	};

	return (
		<div className="wrapper">
			<div className="sidebar">
				<div className="logo" />
				<div className="sidebar-background" />
				<nav>
					{!localStorage.getItem('ACCESS_TOKEN') && (
						<a
							href={`${URL}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(
								SCOPES
							)}&response_type=token`}
							className=" button spotify"
						>
							Login med Spotify
						</a>
					)}
					{config &&
						config.server &&
						config.nickname && (
							<a href={`#/${config!.server.toLowerCase()}/${config.nickname.toLowerCase()}`} className="button">
								Gå til overlay
							</a>
						)}
				</nav>
			</div>
			<div className="container">
				<div className="card">
					<div className="card-header">Config</div>
					<div className="card-content">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="card-group">
								<div className="formgroup">
									<label htmlFor="server">Server</label>
									<input type="text" defaultValue={config.server} name="server" id="server" ref={register} />
								</div>
								<div className="formgroup">
									<label htmlFor="nickname">Nickname</label>
									<input type="text" defaultValue={config.nickname} name="nickname" id="nickname" ref={register} />
								</div>
							</div>
							<div className="card-group">
								<div className="formgroup">
									<label htmlFor="includeCurrentlyPlaying">Include Spotify "Currently playing"-bar</label>
									<input
										type="radio"
										defaultChecked={!loadConfig().includeCurrentlyPlaying}
										value={JSON.stringify(!loadConfig().includeCurrentlyPlaying)}
										name="includeCurrentlyPlaying"
										ref={register}
									/>
									<input
										type="radio"
										defaultChecked={loadConfig().includeCurrentlyPlaying}
										value={JSON.stringify(loadConfig().includeCurrentlyPlaying)}
										name="includeCurrentlyPlaying"
										ref={register}
									/>
								</div>
								<div className="formgroup">
									<label htmlFor="currentlyPlayingPrefix">Prefix text for Spotify "Currently playing"-bar</label>
									<input
										type="text"
										defaultValue={config.currentlyPlayingPrefix}
										name="currentlyPlayingPrefix"
										id="currentlyPlayingPrefix"
										ref={register}
									/>
								</div>
							</div>
							<div className="card-group">
								<div className="formgroup">
									<label htmlFor="color1">Main color (in rgb)</label>
									<input type="text" defaultValue={config.color1} name="color1" id="color1" ref={register} />
								</div>
								<div className="formgroup">
									<label htmlFor="color2">Secondary color (in rgb)</label>
									<input type="text" defaultValue={config.color2} name="color2" id="color2" ref={register} />
								</div>
							</div>
							<button className="green" type="submit">Lagre</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export const loadConfig = () => {
	if (!localStorage.getItem('CONFIG')) {
		const config: Config = {
			currentlyPlayingPrefix: 'Currently playing',
			includeCurrentlyPlaying: false,
			color1: 'rgb(155,31,31)',
			color2: 'rgb(194,76,76)',
			nickname: 'Nickname',
			server: 'Server'
		};
		localStorage.setItem('CONFIG', JSON.stringify(config));
	}
	return JSON.parse(localStorage.getItem('CONFIG')!) as Config;
};

export const saveConfig = (config: Config) => {
	localStorage.setItem('CONFIG', JSON.stringify(config));
};

export default Admin;
