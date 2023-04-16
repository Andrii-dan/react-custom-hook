import { useState } from 'react';

const useCounter = () => {
	const [counter, setCounter] = useState(0);

	const incCounter = () => {
		if (counter < 50) {
			setCounter((counter) => counter + 1);
		}
	};

	const decCounter = () => {
		if (counter > -50) {
			setCounter((counter) => counter - 1);
		}
	};

	const rndCounter = () => {
		setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0));
	};

	const resetCounter = (num) => {
		setCounter(num);
	};

	return { value: counter, incCounter, decCounter, rndCounter, resetCounter };
};

export default useCounter;
