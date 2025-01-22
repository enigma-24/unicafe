import { useState } from 'react';
import Statistics from './Statistics';
import Button from './Button';

export default function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<h1>give feedback</h1>
			<Button onGetFeedback={setGood}>good</Button>
			<Button onGetFeedback={setNeutral}>neutral</Button>
			<Button onGetFeedback={setBad}>bad</Button>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
}
