import React from 'react';
import * as S from './Header.Elements';

const Header = ({ amount, setAmount, filterUsers }) => {
	return (
		<S.NavWrapper>
			<S.FilterMale onClick={() => filterUsers('male')} />
			<S.FilterFemale onClick={() => filterUsers('female')} />
			<S.FilterClear onClick={() => filterUsers('all')} />
			<S.AmountInput
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
		</S.NavWrapper>
	);
};

export default Header;
