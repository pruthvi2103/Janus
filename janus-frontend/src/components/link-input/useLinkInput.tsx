import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { getLinkById, shortenLink } from "../../services/linkService";
import useMountedEffect from "../../hooks/useMountedEffect";

const useLinkInput = () => {
	const [falseLink, setFalseLink] = useState<boolean>(false);
	const [disableBtn, setDisableBtn] = useState<boolean>(true);
	const [shortCode, setShortCode] = useState<string>("");
	const [inputFullLink, setInputFullLink] = useState<string>("");
	const [originalUrl, setOriginalUrl] = useState<string>("");
	const shortenedLinkRef = useRef<string>("");
	const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL;
	// const navigate = useNavigate();

	const handleSubmit = async () => {
		try {
			if (inputFullLink) {
				const sentData = await shortenLink({
					url: inputFullLink,
				});
				shortenedLinkRef.current = sentData.Shortcode;
				setShortCode(sentData.Shortcode);
				setOriginalUrl(inputFullLink);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleInputChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		let link: React.SetStateAction<string> = e.target.value;

		let linkRegex =
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

		if (linkRegex.test(link.toString())) {
			setFalseLink(false);
			setDisableBtn(false);
			setInputFullLink(link);
		} else {
			setFalseLink(true);
			setDisableBtn(true);
		}
		if (!link) {
			setFalseLink(false);
			setDisableBtn(false);
		}
	};

	// const navigateToOriginalLink = async () => {
	// 	try {
	// 		const fetchOriginalLinkById = await getLinkById(shortCode);

	// 		setOriginalUrl(fetchOriginalLinkById.url);
	// 	} catch (err) {
	// 		console.log(err, "error");
	// 	}
	// };
	// useMountedEffect(() => {
	// 	navigateToOriginalLink();
	// }, [shortCode]);

	const showShortUrl = () => {
		return `${DOMAIN_URL}/${shortCode}`;
	};

	return {
		handleSubmit,
		handleInputChange,
		falseLink,
		disableBtn,
		shortCode,
		originalUrl,
		showShortUrl,
	};
};

export default useLinkInput;
