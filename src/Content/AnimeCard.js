import React from 'react';
import { string, arrayOf, bool } from 'prop-types';
import { Image, Text } from 'react-native';
import styled from 'styled-components/native';
import { Card } from './common';

const Container = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;

const Anime = styled.View`
	padding: 12px;
`;

const AnimeTitle = styled.Text`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
`;

const AnimeStudios = styled.Text`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`;

const AnimeDescription = styled.Text`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.xsmall};
`;

const AnimeAvailability = styled.View`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`;

const Circle = styled.View`
	width: 9px;
	height: 9px;
	border-radius: 50%;
	background-color: ${({ theme: { backgroundColors }, availability }) =>
		availability
			? backgroundColors.activeAnime
			: backgroundColors.inActiveAnime};
`;

const Genres = styled.View`
	flex: 1;
	flex-direction: row;
`;

const AnimeGenre = styled.View`
	border-radius: 2px;
	background-color: #b632d7;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
	padding: 2px 5px;
`;

const propTypes = {
	title: string,
	studios: arrayOf(string),
	description: string,
	imgURI: string,
	nyaaAvailability: bool,
	genres: arrayOf(string),
};

const AnimeCard = ({
	title,
	studios,
	description,
	imgURI,
	nyaaAvailability,
	genres,
}) => (
	<Card>
		<Container>
			<Image src={imgURI} style={{ width: 114, height: 165 }} />
			<Anime>
				<AnimeTitle>{title}</AnimeTitle>
				<AnimeStudios>{studios.join(',')}</AnimeStudios>
				<AnimeDescription>{description}</AnimeDescription>
				<AnimeAvailability>
					<Text>Nyaa avaiable: </Text>
					<Circle availability={nyaaAvailability} />
				</AnimeAvailability>
				<Genres>
					{genres.map(genre => (
						<AnimeGenre>
							<Text>{genre}</Text>
						</AnimeGenre>
					))}
				</Genres>
			</Anime>
		</Container>
	</Card>
);

AnimeCard.propTypes = propTypes;

export default AnimeCard;
