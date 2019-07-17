import React from 'react';
import { arrayOf, shape, string, bool, number } from 'prop-types';
import styled from 'styled-components/native';
import AnimeCard from './AnimeCard';

const List = styled.FlatList`
	padding: 16px;
`;

const propTypes = {
	animes: arrayOf(
		shape({
			title: string,
			airingAt: number,
			episode: number,
			studios: arrayOf(string),
			description: string,
			imgURI: string,
			nyaaAvailability: bool,
			genres: arrayOf(string),
		})
	),
};

// eslint-disable-next-line
const renderAnime = ({ item: anime }) => <AnimeCard {...anime} />;
const getKey = anime => anime.title;

const AnimeList = ({ animes }) => (
	<List data={animes} renderItem={renderAnime} keyExtractor={getKey} />
);

AnimeList.propTypes = propTypes;

export default AnimeList;
