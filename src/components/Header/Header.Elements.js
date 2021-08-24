import styled from 'styled-components';
import { Male } from '@styled-icons/foundation/Male';
import { Female } from '@styled-icons/foundation/Female';
import { MaleFemale } from '@styled-icons/foundation/MaleFemale';

export const NavWrapper = styled.nav`
	width: 100%;
	padding: 10px 50px;
	background-color: #ffffff;
	color: #000000;
`;

export const FilterMale = styled(Male)`
	height: 30px;
	margin-right: 50px;
	cursor: pointer;
`;

export const FilterFemale = styled(Female)`
	height: 30px;
	margin-right: 50px;
	cursor: pointer;
`;

export const FilterClear = styled(MaleFemale)`
	height: 30px;
	margin-right: 50px;
	cursor: pointer;
`;

export const AmountInput = styled.input.attrs((props) => ({
	type: 'number',
	min: '1',
}))`
	width: 50px;
	font-size: 20px;
	padding: 5px;
`;
