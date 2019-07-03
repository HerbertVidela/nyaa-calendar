import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Header from './src/Header';
import Content from './src/Content';
import theme from './src/theme';

const MainContainer = styled.View`
	flex: 1;
	background-color: ${({ theme: { backgroundColors } }) =>
		backgroundColors.main};
`;

const CenteredContainer = styled.View`
	background-color: ${({ theme: { backgroundColors } }) =>
		backgroundColors.main};
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const loadFonts = async setFontsLoading => {
	await Font.loadAsync({
		'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'), // eslint-disable-line
		Roboto: require('./assets/fonts/Roboto-Regular.ttf'), // eslint-disable-line
		'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'), // eslint-disable-line
		'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'), // eslint-disable-line
	});
	await setFontsLoading(false);
};

const App = () => {
	const [fontsLoading, setFontsLoading] = useState(true);

	useEffect(() => {
		loadFonts(setFontsLoading);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			{fontsLoading ? (
				<CenteredContainer>
					<ActivityIndicator size="large" color="#b632d7" />
				</CenteredContainer>
			) : (
				<MainContainer>
					<Header />
					<Content date="June 21th" />
				</MainContainer>
			)}
		</ThemeProvider>
	);
};

export default App;
