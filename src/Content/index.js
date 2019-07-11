import React from 'react';
import { object } from 'prop-types';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import format from 'date-fns/format';
import { animesQuery } from '../queries';
import AnimeList from './AnimeList';

const Container = styled.View`
	flex: 1;
`;

const DateContainer = styled.View`
	border-bottom-width: 1px;
	border-bottom-color: rgba(0, 0, 0, 0.12);
	padding: 16px;
`;

const Date = styled.Text`
	color: ${({ theme: { textColors } }) => textColors.secondary};
	font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
	font-weight: 500;
`;

const propTypes = {
	date: object,
};

const Content = ({ date }) => (
	<Container>
		<DateContainer>
			<Date>{format(date, 'do MMMM')}</Date>
		</DateContainer>
		<Query
			query={animesQuery}
			variables={{ currentDate: format(date, 'dd-MM-yyyy') }}
		>
			{({ loading, data }) =>
				loading ? <Text>Loading....</Text> : <AnimeList animes={data.animes} />
			}
		</Query>
	</Container>
);

Content.propTypes = propTypes;

export default Content;
