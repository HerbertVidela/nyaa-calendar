import gql from 'graphql-tag';

export const animesQuery = gql`
	query animesQuery($currentDate: String!) {
		animes(currentDate: $currentDate) {
			title
			nyaaAvailability: published
			episode
			imageURI
			genres
			studios
			description
		}
	}
`;
