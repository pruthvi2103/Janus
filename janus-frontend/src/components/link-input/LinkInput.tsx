import React, { useState, useRef } from "react";
import { getLinkById, shortenLink } from "../../services/linkService";
import IconComponent from "../IconComponent";
import {
	InputContainer,
	InputBorderWrapper,
	URLInput,
	SubmitBtn,
	ShortLinkWrapper,
	ShortLinkContainer,
	ErrorMsg,
} from "./LinkInput.styles";
// import { Link, useNavigate } from "react-router-dom";
import useLinkInput from "./useLinkInput";

interface Props {}

const LinkInput: React.FC<Props> = () => {
	const {
		handleSubmit,
		handleInputChange,
		falseLink,
		disableBtn,
		shortCode,
		originalUrl,
		showShortUrl,
	} = useLinkInput();

	return (
		<InputContainer>
			<InputBorderWrapper>
				<IconComponent size={32} color='#a2a3a7'>
					<path d='M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z'></path>
					<path d='m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z'></path>
				</IconComponent>
				<URLInput
					onChange={handleInputChange}
					placeholder='Paste your URL here'
				/>
				<SubmitBtn disable={disableBtn} onClick={handleSubmit}>
					Shorten
				</SubmitBtn>
			</InputBorderWrapper>
			{falseLink && <ErrorMsg>Enter valid URL</ErrorMsg>}
			{shortCode && (
				<ShortLinkWrapper>
					<ShortLinkContainer>
						{originalUrl ? (
							<a href={originalUrl} target='_blank'>
								{showShortUrl()}
							</a>
						) : (
							"Loading"
						)}
					</ShortLinkContainer>
				</ShortLinkWrapper>
			)}
		</InputContainer>
	);
};

export default LinkInput;
