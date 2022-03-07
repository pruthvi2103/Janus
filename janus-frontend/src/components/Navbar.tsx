import React from "react";
import styled from "styled-components";
import IconComponent from "./IconComponent";

interface Props {}

const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100px;
`;
const LogoWrapper = styled.div`
	display: flex;
	gap: 10px;
`;

const Developers = styled.h3`
	text-decoration: underline;
	cursor: pointer;
`;

const Header = styled.h2``;

const Navbar: React.FC<Props> = () => {
	return (
		<Nav>
			<LogoWrapper>
				<IconComponent size={24}>
					<path d='M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z'></path>
					<path d='m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z'></path>
				</IconComponent>
				<Header>PS-URLS</Header>
			</LogoWrapper>
			<Developers>Developers</Developers>
		</Nav>
	);
};

export default Navbar;
