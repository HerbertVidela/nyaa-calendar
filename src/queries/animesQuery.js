import gql from 'graphql-tag';

export const animesQuery = gql`
	query animesQuery($startDay: Float!, $endDay: Float!) {
		animes(startDay: $startDay, endDay: $endDay) {
			title
			airingAt
			nyaaAvailability: published
			episode
			imageURI
			genres
			studios
		}
	}
`;
