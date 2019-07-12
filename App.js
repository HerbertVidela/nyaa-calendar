import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { onError } from 'apollo-link-error';
import { API_URL } from 'react-native-dotenv';
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

const httpLink = createHttpLink({ uri: 'http://192.168.1.65:4000/graphql' });
const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) =>
			console.error(
				`[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
					locations
				)}, Path: ${path}`
			)
		);
	}

	if (networkError) console.error(`[Network error]: ${networkError}`);
});
const link = errorLink.concat(httpLink);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});

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
				<ApolloProvider client={client}>
					<MainContainer>
						<Header />
						<Content date={new Date()} />
					</MainContainer>
				</ApolloProvider>
			)}
		</ThemeProvider>
	);
};

export default App;
