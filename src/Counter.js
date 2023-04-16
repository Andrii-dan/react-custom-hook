import { useEffect } from 'react';
import useCounter from './useCounter';
import './Style.css';

const Counter = (props) => {
	const counter = useCounter();

	useEffect(() => {
		counter.resetCounter(props.counter);
	}, [props.counter]);

	return (
		<div className='component'>
			<div className='counter'>{counter.value}</div>
			<div className='controls'>
				<button onClick={counter.incCounter}>INC</button>
				<button onClick={counter.decCounter}>DEC</button>
				<button onClick={counter.rndCounter}>RND</button>
				<button onClick={() => counter.resetCounter(props.counter)}>
					RESET
				</button>
			</div>
		</div>
	);
};

export default Counter;
