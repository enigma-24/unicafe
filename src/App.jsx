import { useState } from 'react';
import Statistics from './Statistics';

export default function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<h1>give feedback</h1>
			<button onClick={() => setGood((good) => good + 1)}>good</button>
			<button onClick={() => setNeutral(neutral => neutral + 1)}>neutral</button>
			<button onClick={() => setBad(bad => bad + 1)}>bad</button>
			<h1>statistics</h1>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
}
