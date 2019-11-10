export interface Config {
	currentlyPlayingPrefix?: string;
	color1?: string;
	color2?: string;
	includeCurrentlyPlaying?: boolean;
	server?: string;
	nickname?: string;
	spotifyToken: string;
}

export interface CurrentlyPlayingProps {
	width: number;
	token?: string;
}

export interface SpotifyCurrentlyPlayingResultExternalUrls {
	spotify: string;
}

export interface SpotifyCurrentlyPlayingResultContext {
	external_urls: SpotifyCurrentlyPlayingResultExternalUrls;
	href: string;
	type: string;
	uri: string;
}

export interface SpotifyCurrentlyPlayingResultArtist {
	external_urls: SpotifyCurrentlyPlayingResultExternalUrls;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}

export interface SpotifyCurrentlyPlayingResultImage {
	height: number;
	url: string;
	width: number;
}

export interface SpotifyCurrentlyPlayingResultAlbum {
	album_type: string;
	artists: SpotifyCurrentlyPlayingResultArtist[];
	available_markets: any[];
	external_urls: SpotifyCurrentlyPlayingResultExternalUrls;
	href: string;
	id: string;
	images: SpotifyCurrentlyPlayingResultImage[];
	name: string;
	release_date: string;
	release_date_precision: string;
	total_tracks: number;
	type: string;
	uri: string;
}

export interface SpotifyCurrentlyPlayingResultArtist2 {
	external_urls: SpotifyCurrentlyPlayingResultExternalUrls;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}

export interface SpotifyCurrentlyPlayingResultExternalIds {
	isrc: string;
}

export interface SpotifyCurrentlyPlayingResultItem {
	album: SpotifyCurrentlyPlayingResultAlbum;
	artists: SpotifyCurrentlyPlayingResultArtist2[];
	available_markets: any[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: SpotifyCurrentlyPlayingResultExternalIds;
	external_urls: SpotifyCurrentlyPlayingResultExternalUrls;
	href: string;
	id: string;
	is_local: boolean;
	name: string;
	popularity: number;
	preview_url?: any;
	track_number: number;
	type: string;
	uri: string;
}

export interface SpotifyCurrentlyPlayingResultDisallows {
	resuming: boolean;
}

export interface SpotifyCurrentlyPlayingResultActions {
	disallows: SpotifyCurrentlyPlayingResultDisallows;
}

export interface SpotifyCurrentlyPlayingResult {
	timestamp?: number;
	context?: SpotifyCurrentlyPlayingResultContext;
	progress_ms?: number;
	item?: SpotifyCurrentlyPlayingResultItem;
	currently_playing_type?: string;
	actions?: SpotifyCurrentlyPlayingResultActions;
	is_playing?: boolean;
}

