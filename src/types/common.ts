export interface UserInfo {
	userName: string;
	password: string;
	city: string;
	country: string;
	bio: string;
}

export interface Catalog {
	notifications: boolean;
	messages: boolean;
}

export interface TrackInfo{
	thumpnail: any,
	trackName: string,
	artist: string,
}
