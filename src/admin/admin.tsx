import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { loadConfig, saveConfig } from '../util';

const Admin: React.FC = () => {
	const REDIRECT_URI = `${window.location.protocol + '//' + window.location.host + window.location.pathname}#/spotify-token`;
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
					{!loadConfig().spotifyToken && (
						<a href={`https://evig-nedtur.herokuapp.com/login?returnurl=${encodeURIComponent(REDIRECT_URI)}`} className="button spotify">
							Login med Spotify
						</a>
					)}
					{config && config.server && config.nickname && (
						<a href={`#/${config!.server.toLowerCase()}/${config.nickname.toLowerCase()}/${config.spotifyToken}`} className="button">
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
								{config.spotifyToken && (
									<div className="formgroup">
										<label htmlFor="spotifyToken">Spotify token</label>
										<input
											type="text"
											defaultValue={config.spotifyToken}
											name="spotifyToken"
											id="spotifyToken"
											ref={register}
											disabled={true}
										/>
									</div>
								)}
							</div>
							<button className="green" type="submit">
								Lagre
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
