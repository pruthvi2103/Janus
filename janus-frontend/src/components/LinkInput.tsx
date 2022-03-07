import React from "react";
import styled from "styled-components";
import IconComponent from "./IconComponent";

interface Props {}

const InputContainer = styled.div`
	box-shadow: rgba(72, 66, 161, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.2) 0px 30px 60px -30px;
	padding: 3rem 4rem;
	margin: 5.2rem auto;
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	border-radius: 10px;
`;
const InputBorderWrapper = styled.div`
	border: 1px solid #000;
	display: flex;
	align-items: center;
	border-radius: 10px;
	padding: 0.5rem;
	background-color: #f6f5fc;
`;
const URLInput = styled.input`
	font-size: 1.2rem;
	padding: 1rem 1rem;
	border: 0;
	outline: 0;
	background-color: #f6f5fc;
	:focus {
		border: 0;
		outline: 0;
	}
`;
const SubmitBtn = styled.button`
	background: linear-gradient(to left, #7f78e2, #9690ed);
	color: #fff;
	padding: 0.85rem 0.85rem;
	border-radius: 10px;
	border: 0;
	outline: 0;
`;

const LinkInput: React.FC<Props> = () => {
	return (
		<InputContainer>
			<InputBorderWrapper>
				<IconComponent size={32} color='#a2a3a7'>
					<path d='M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z'></path>
					<path d='m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z'></path>
				</IconComponent>
				<URLInput placeholder='Paste your URL here' />
				<SubmitBtn>Shorten</SubmitBtn>
			</InputBorderWrapper>
		</InputContainer>
	);
};

export default LinkInput;
