import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 0;
	margin: 0;
	width: 100vw;
	height: 100vh;
	background-color: #00112d;
	color: #ffffff;
`;

export const ContentWrapper = styled.section`
	max-width: 1024px;
	width: 100%;
`;

export const CardsWrapper = styled.div`
	display: flex;
	justify-content: left;
	flex-wrap: wrap;
	padding: 10px;
`;

export const Message = styled.h1`
	margin: 50px 100px;
`;

export const Title = styled.h1`
	margin: 0;
	padding-top: 50px;
	text-align: center;
`;
