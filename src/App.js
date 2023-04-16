import { useState, useEffect } from 'react';
import Counter from './Counter';
import RndCounter from './RndCounter';
import './App.css';

function App() {
	const [randomNumber, setRandomNumber] = useState(0);

	useEffect(() => {
		fetch(
			'https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new'
		)
			.then((res) => res.text())
			.then((res) => setRandomNumber(parseInt(res)))
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<Counter counter={randomNumber} />
			<RndCounter counter={randomNumber} />
		</>
	);
}

export default App;
