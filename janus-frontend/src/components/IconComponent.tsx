import React from "react";
import styled from "styled-components";

interface Props {
	size: number;
	color?: string;
	children: React.ReactNode;
}

const Icon = styled.svg``;

const IconComponent: React.FC<Props> = ({ size, color = "#000", children }) => {
	return (
		<Icon
			width={size}
			fill={color}
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'>
			{children}
		</Icon>
	);
};

export default IconComponent;
