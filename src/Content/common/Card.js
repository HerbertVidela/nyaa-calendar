import React from 'react';
import { oneOfType, element, node } from 'prop-types';
import styled from 'styled-components/native';

const Container = styled.View`
	background-color: white;
	margin-bottom: 8px;

	elevation: 5;
	shadow-color: #000;
	shadow-offset: 0px 2px;
	shadow-opacity: 0.24;
	shadow-radius: 2px;
`;

const SecondBoxShadow = styled.View`
	background-color: white;

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
