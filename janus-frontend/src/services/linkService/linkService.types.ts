export interface ILinkData {
	_id: string;
	clicks: number;
	shortcode: string;
	url: string;
}

export interface ICreateLinkPayload {
	url: string;
	shortcode: string;
	clicks: number;
}
