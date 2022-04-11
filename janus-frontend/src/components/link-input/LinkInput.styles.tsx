import styled from "styled-components";

export const InputContainer = styled.div`
	box-shadow: rgba(72, 66, 161, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.2) 0px 30px 60px -30px;
	padding: 3rem 4rem;
	margin: 5.2rem auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	justify-content: center;
	width: fit-content;
	border-radius: 10px;
`;
export const InputBorderWrapper = styled.div`
	border: 1px solid #000;
	display: flex;
	align-items: center;
	border-radius: 10px;
	padding: 0.5rem;
	background-color: #f6f5fc;
`;
export const URLInput = styled.input`
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
export const SubmitBtn = styled.button<{ disable: Boolean }>`
	background: linear-gradient(to left, #7f78e2, #9690ed);
	color: #fff;
	padding: 0.85rem 0.85rem;
	border-radius: 10px;
	border: 0;
	outline: 0;
	cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};
`;

export const ShortLinkWrapper = styled.div`
	border: 1px dashed #272727;
	margin: 10px 0 0 0;
	padding: 10px;
`;
export const ShortLinkContainer = styled.h3`
	color: #3d3dca;
	text-decoration: underline;
	cursor: pointer;
`;
export const ErrorMsg = styled.span`
	font-size: small;
	color: red;
`;
