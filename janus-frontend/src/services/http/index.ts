const BASE_URL = "http://localhost:8080";

const getHandler = (url: string) => {
	return fetch(`${BASE_URL}${url}`);
};

const postHandler = (url: string, payload: Record<string, string>) => {
	return fetch(`${BASE_URL}${url}`, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(payload), // body data type must match "Content-Type" header
	});
};

export const http = {
	get: getHandler,
	post: postHandler,
};
