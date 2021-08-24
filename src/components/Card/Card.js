import React, { useState } from 'react';
import * as S from './Card.Elements';

const Card = ({ picture, name, gender }) => {
	const [view, setView] = useState(false);

	return (
		<S.Wrapper onClick={() => setView(!view)} view={view}>
			<S.Picture src={picture.medium} alt={`${name.first} ${name.last}`} />
			<S.Paragraph>{`${name.first} ${name.last}`}</S.Paragraph>
			<S.Paragraph>{gender}</S.Paragraph>
		</S.Wrapper>
	);
};

export default Card;
