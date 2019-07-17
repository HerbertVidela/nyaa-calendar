import React from 'react';
import { object } from 'prop-types';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import parse from 'date-fns/parse';
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

const DateText = styled.Text`
	color: ${({ theme: { textColors } }) => textColors.secondary};
	font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
	font-weight: 500;
`;

const propTypes = {
	currentDate: object,
};

const createQueryVariables = date => {
	const startOfTheDay = format(date, 'dd-MM-yyyy 00:00:00');
	const startDay = parse(startOfTheDay, 'dd-MM-yyyy HH:mm:ss', date).getTime();
	const endDay = addDays(startDay, 1).getTime();

	return {
		startDay: parseInt(startDay / 1000, 10),
		endDay: parseInt(endDay / 1000, 10),
	};
};

const Content = ({ currentDate }) => (
	<Container>
		<DateContainer>
			<DateText>{format(currentDate, 'do MMMM')}</DateText>
		</DateContainer>
		<Query
			query={animesQuery}
			variables={{ ...createQueryVariables(currentDate) }}
		>
			{({ loading, data }) =>
				loading ? <Text>Loading....</Text> : <AnimeList animes={data.animes} />
			}
		</Query>
	</Container>
);

Content.propTypes = propTypes;

export default Content;
