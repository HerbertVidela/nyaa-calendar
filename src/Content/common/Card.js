import React from 'react';
import { oneOfType, element, node } from 'prop-types';
import styled from 'styled-components/native';

const Container = styled.View`
	border-radius: 2px;
	border-style: solid;
	border-width: 0.5px;
	border-image-source: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0),
		rgba(0, 0, 0, 0) 80%,
		rgba(0, 0, 0, 0.02) 95%,
		rgba(0, 0, 0, 0.04)
	);
	border-image-slice: 1;
	background-image: #ffffff,
		linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0) 80%,
			rgba(0, 0, 0, 0.02) 95%,
			rgba(0, 0, 0, 0.04)
		);
	background-origin: border-box;
	background-clip: content-box, border-box;

	elevation: 2;
	shadow-color: #000;
	shadow-offset: 0px 2px;
	shadow-opacity: 0.24;
	shadow-radius: 2px;
`;

const SecondBoxShadow = styled.View`
	shadow-color: #000;
	shadow-offset: 0px 0px;
	shadow-opacity: 0.12;
	shadow-radius: 2px;
`;

const propTypes = {
	children: oneOfType([element, node]),
};

const Card = ({ children }) => (
	<Container>
		<SecondBoxShadow>{children}</SecondBoxShadow>
	</Container>
);

Card.propTypes = propTypes;

export default Card;
