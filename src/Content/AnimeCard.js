import React from 'react';
import { string, arrayOf, bool } from 'prop-types';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { Card } from './common';

const Container = styled.View`
	flex: 1;
	flex-direction: row;
`;

const Anime = styled.View`
	flex: 1;
	padding: 12px;
	flex-shrink: 1;
`;

const AnimeTitle = styled.Text`
	font-family: 'Roboto-Bold';
	font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
`;

const AnimeStudios = styled.Text`
	font-family: 'Roboto-Light';
	font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
	margin-bottom: 8px;
`;

const AnimeDescription = styled.Text`
	font-family: 'Roboto-Light';
	font-size: ${({ theme: { fontSizes } }) => fontSizes.xsmall};
	margin-bottom: 8px;
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
	studios: arrayOf(string),
	description: string,
	imageURI: string,
	nyaaAvailability: bool,
	genres: arrayOf(string),
};

const AnimeCard = ({
	title,
	studios,
	description,
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
				<AnimeTitle>{title}</AnimeTitle>
				<AnimeStudios>{studios.join(',')}</AnimeStudios>
				<AnimeDescription>{description}</AnimeDescription>
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
