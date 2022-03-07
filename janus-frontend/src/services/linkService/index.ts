import { http } from "../http";
import { ILinkData } from "./linkService.types";
const LINKS_API_URL = "/links";
export const getLinkById = async (shortcode: string): Promise<ILinkData> => {
	const response = await http.get(`${LINKS_API_URL}/${shortcode}`);
	const jsonData = await response.json();
	return jsonData;
};
