import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components/native';
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
	date: string,
};

const animes = [
	{
		title: 'Boruto: Naruto Next Generations',
		studios: ['Studio Pierrot'],
		description:
			"Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage monument. But this is not his story... A new generation of ninja are ready to take the stage, led by Naruto's own son, Boruto!(Source: VIZ Media)",
		imgURI:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97938-BIvZdg4vLm03.jpg',
		nyaaAvailability: true,
		genres: ['Action', 'Adventure'],
	},
	{
		title: 'Boruto: Naruto Next Generations 2',
		studios: ['Studio Pierrot'],
		description:
			"Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage monument. But this is not his story... A new generation of ninja are ready to take the stage, led by Naruto's own son, Boruto!(Source: VIZ Media)",
		imgURI:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97938-BIvZdg4vLm03.jpg',
		nyaaAvailability: true,
		genres: ['Action', 'Adventure'],
	},
	{
		title: 'Boruto: Naruto Next Generations 3',
		studios: ['Studio Pierrot'],
		description:
			"Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage monument. But this is not his story... A new generation of ninja are ready to take the stage, led by Naruto's own son, Boruto!(Source: VIZ Media)",
		imgURI:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97938-BIvZdg4vLm03.jpg',
		nyaaAvailability: true,
		genres: ['Action', 'Adventure'],
	},
	{
		title: 'Boruto: Naruto Next Generations 4',
		studios: ['Studio Pierrot'],
		description:
			"Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage monument. But this is not his story... A new generation of ninja are ready to take the stage, led by Naruto's own son, Boruto!(Source: VIZ Media)",
		imgURI:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97938-BIvZdg4vLm03.jpg',
		nyaaAvailability: true,
		genres: ['Action', 'Adventure'],
	},
	{
		title: 'Boruto: Naruto Next Generations 5',
		studios: ['Studio Pierrot'],
		description:
			"Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage monument. But this is not his story... A new generation of ninja are ready to take the stage, led by Naruto's own son, Boruto!(Source: VIZ Media)",
		imgURI:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97938-BIvZdg4vLm03.jpg',
		nyaaAvailability: true,
		genres: ['Action', 'Adventure'],
	},
	{
		title: 'Boruto: Naruto Next Generations 6',
		studios: ['Studio Pierrot'],
		description:
			"Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage monument. But this is not his story... A new generation of ninja are ready to take the stage, led by Naruto's own son, Boruto!(Source: VIZ Media)",
		imgURI:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97938-BIvZdg4vLm03.jpg',
		nyaaAvailability: true,
		genres: ['Action', 'Adventure'],
	},
	{
		title: 'Boruto: Naruto Next Generations 7',
		studios: ['Studio Pierrot'],
		description:
			"Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage monument. But this is not his story... A new generation of ninja are ready to take the stage, led by Naruto's own son, Boruto!(Source: VIZ Media)",
		imgURI:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97938-BIvZdg4vLm03.jpg',
		nyaaAvailability: true,
		genres: ['Action', 'Adventure'],
	},
];

const Content = ({ date }) => (
	<Container>
		<DateContainer>
			<Date>{date}</Date>
		</DateContainer>
		<AnimeList animes={animes} />
	</Container>
);

Content.propTypes = propTypes;

export default Content;
