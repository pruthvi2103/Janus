import React from "react";
import styled from "styled-components";

interface Props {}

const HeroWrapper = styled.div`
	margin-top: 140px;
`;
const Heading = styled.h1`
	font-weight: 700;
	text-align: center;
	color: #4842a1;
	font-size: 4rem;
	@media only screen and (max-width: 600px) {
		font-size: 2.4rem;
	}
`;
const SubHeading = styled.h5`
	font-weight: 400;
	text-align: center;
	color: #a2a3a7;
	@media only screen and (max-width: 600px) {
		font-size: 1rem;
	}
`;

const HeroSection: React.FC<Props> = () => {
	return (
		<HeroWrapper>
			<Heading>Create Short Urls!</Heading>
			<SubHeading>
				PS-URLS allows you to shorten your links to manage them efficient.
			</SubHeading>
		</HeroWrapper>
	);
};

export default HeroSection;
