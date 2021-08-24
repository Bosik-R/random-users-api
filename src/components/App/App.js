import { useState, useEffect } from 'react';
import * as S from 'components/App/App.Elements.js';
import Card from 'components/Card/Card';
import Header from 'components/Header/Header';

function App() {
	const [users, setUsers] = useState(null);
	const [amount, setAmount] = useState(15);
	const [gender, setGender] = useState('all');

	const url = `https://randomuser.me/api/?results=${amount}`;

	const getRandomUser = async (value) => {
		const response = await fetch(url);
		const data = await response.json();
		const results = await data.results;

		if (value === 'all') {
			setUsers(results);
		} else {
			const filteredUsers = results.filter((user) => user.gender === value);
			setUsers(filteredUsers);
		}
	};

	useEffect(() => {
		getRandomUser(gender);
	}, [amount, gender]);

	return (
		<S.Container>
			<S.ContentWrapper>
				<Header
					amount={amount}
					setAmount={setAmount}
					filterUsers={getRandomUser}
				/>
				<S.Title>Random Users API</S.Title>
				<S.CardsWrapper>
					{users ? (
						users.map((user, index) => <Card key={index} {...user} />)
					) : (
						<S.Message>Loading...</S.Message>
					)}
				</S.CardsWrapper>
			</S.ContentWrapper>
		</S.Container>
	);
}

export default App;
