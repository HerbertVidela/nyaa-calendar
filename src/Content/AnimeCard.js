import React from 'react';
import { string, arrayOf, bool, number } from 'prop-types';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import format from 'date-fns/format';
import { Card } from './common';

const Container = styled.View`
	flex: 0;
	flex-direction: row;
`;

const Anime = styled.View`
	flex: -1;
	padding: 12px;
`;

const AnimeTitle = styled.Text`
	font-family: 'Roboto-Bold';
	font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
`;

const AnimeStudios = styled.Text`
	font-family: 'Roboto-Light';
	font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
	margin-bottom: 12px;
`;

const AnimeDescription = styled.Text`
	font-family: 'Roboto-Light';
	font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
	margin-bottom: 12px;
`;

const AnimeAvailability = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	margin-bottom: 8px;
`;

const AvailabilityText = styled.Text`
	font-family: 'Roboto-Light';
	font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
	margin-right: 4px;
`;

const Circle = styled.View`
	width: 9px;
	height: 9px;
	border-radius: 100px;
	background-color: ${({ theme: { backgroundColors }, availability }) =>
		availability
			? backgroundColors.activeAnime
			: backgroundColors.inActiveAnime};
`;

const Genres = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
`;

const AnimeGenre = styled.View`
	border-radius: 2px;
	background-color: #b632d7;
	padding: 2px 5px;
	margin-right: 5px;
`;

const GenreText = styled.Text`
	color: white;
	font-family: 'Roboto';
	font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`;

const propTypes = {
	title: string,
	episode: number,
	airingAt: number,
	studios: arrayOf(string),
	imageURI: string,
	nyaaAvailability: bool,
	genres: arrayOf(string),
};

const AnimeCard = ({
	title,
	episode,
	airingAt,
	studios,
	imageURI,
	nyaaAvailability,
	genres,
}) => (
	<Card>
		<Container>
			<Image
				source={{ uri: imageURI }}
				style={{ width: 114, height: 165 }}
				resizeMethod="resize"
			/>
			<Anime>
				<AnimeTitle>
					{title} - Ep: {episode}
				</AnimeTitle>
				<AnimeStudios>{studios.join(',') || '-'}</AnimeStudios>
				<AnimeDescription>
					Airing at: {format(new Date(airingAt * 1000), 'hh:mm aaaa')}
				</AnimeDescription>
				<AnimeAvailability>
					<AvailabilityText>Nyaa avaiable: </AvailabilityText>
					<Circle availability={nyaaAvailability} />
				</AnimeAvailability>
				<Genres>
					{genres.map(genre => (
						<AnimeGenre key={`${title}-${genre}`}>
							<GenreText>{genre}</GenreText>
						</AnimeGenre>
					))}
				</Genres>
			</Anime>
		</Container>
	</Card>
);

AnimeCard.propTypes = propTypes;

export default AnimeCard;
