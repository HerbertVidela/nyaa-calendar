import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	background-color: ${({ theme: { backgroundColors } }) =>
		backgroundColors.main};
	display: flex;
	padding: 40px 16px 16px 16px;
	min-height: 56px;

	elevation: 3;
	shadow-color: #000;
	shadow-offset: 0px 4px;
	shadow-opacity: 0.24;
	shadow-radius: 4px;
`;

const Title = styled.Text`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.xlarge};
	color: ${({ theme: { textColors } }) => textColors.main};
	font-weight: 500;
`;

const Header = () => (
	<Container>
		<Title>NyaaCalendar</Title>
	</Container>
);

export default Header;
