import { useState } from 'react';

export default function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const totalScore = good + neutral + bad;
	const average = totalScore === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / totalScore;
	const positive = totalScore === 0 ? 0 : (good / totalScore) * 100;

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
			<p>all {totalScore}</p>
			<p>average {average}</p>
			<p>positive {positive}</p>
		</>
	);
}
