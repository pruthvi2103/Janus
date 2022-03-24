export interface ITotalLinkData {
	Url: string;
	Shortcode: string;
	Clicks: number;
}

export interface ILinkData {
	_id: string;
	clicks: number;
	shortcode: string;
	url: string;
}

export interface ICreateLinkPayload {
	url: string;
}

export interface IShortenedLinkResponse {
	Shortcode: string;
	Error: string;
}
