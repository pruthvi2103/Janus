import { http } from "../http";
import {
	ILinkData,
	ICreateLinkPayload,
	ITotalLinkData,
	IShortenedLinkResponse,
} from "./linkService.types";
const BASE_URL = "http://localhost:8080";
const LINKS_API_URL = "/links";

export const getAllLinks = async (): Promise<ITotalLinkData> => {
	const response = await http.get(`${LINKS_API_URL}`);
	const jsonData = await response.json();
	return jsonData;
};

export const getLinkById = async (shortcode: string): Promise<ILinkData> => {
	const response = await http.get(`${LINKS_API_URL}/${shortcode}`);
	const jsonData = await response.json();
	return jsonData;
};
export const shortenLink = async (
	payload: ICreateLinkPayload
): Promise<IShortenedLinkResponse> => {
	const response = await http.post(`${LINKS_API_URL}`, payload);
	const data = await response.json();
	return data;
};
