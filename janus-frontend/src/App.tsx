import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import circle from "./assets/circle.svg";
import HeroSection from "./components/HeroSection";
import LinkInput from "./components/LinkInput";
import { getAllLinks, getLinkById } from "./services/linkService";

const Container = styled.div`
	padding: 0 50px;
	width: auto;
	height: 100vh;
	position: relative;
	@media only screen and (max-width: 600px) {
		padding: 0 20px;
	}
`;

const BlurredDiv = styled.img<{
	top?: string;
	left?: string;
	right?: string;
	width?: string;
	height?: string;
}>`
	position: fixed;
	top: ${({ top }) => top || "unset"};
	left: ${({ left }) => left || "unset"};
	right: ${({ right }) => right || "unset"};
	width: ${({ width }) => width || "unset"};
	height: ${({ height }) => height || "unset"};
	z-index: -1;
`;

const App: React.FC = () => {
	// useEffect(async () => {
	// 	const data = await getAllLinks("/links");

	// 	console.log(data);
	// }, []);

	return (
		<>
			<Container>
				<BlurredDiv
					src={circle}
					top='-128px'
					left='-171px'
					width='380px'
					height='380px'
				/>
				<BlurredDiv
					src={circle}
					top='-194px'
					right='-214px'
					width='380px'
					height='380px'
				/>
				<Navbar />
				<HeroSection />
				<LinkInput />
			</Container>
		</>
	);
};

export default App;
