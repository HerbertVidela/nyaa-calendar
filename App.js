import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import Header from './src/Header';
import theme from './src/theme';

const MainContainer = styled.View`
	background-color: ${({ theme: { backgroundColors} }) => backgroundColors.main};
	elevation: 1;
`;

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainContainer>
				<Header />
			</MainContainer>
		</ThemeProvider>
	);
};

