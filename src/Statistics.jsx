const Statistics = ({ good, neutral, bad }) => {
	const totalScore = good + neutral + bad;
	const average =
		totalScore === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / totalScore;
	const positive = totalScore === 0 ? 0 : (good / totalScore) * 100;

	return (
		<>
			<h1>statistics</h1>
			{good === 0 && neutral === 0 && bad === 0 ? (
				<p>No feedback given</p>
			) : (
				<>
					<p>good {good}</p>
					<p>neutral {neutral}</p>
					<p>bad {bad}</p>
					<p>all {totalScore}</p>
					<p>average {average}</p>
					<p>positive {positive}</p>
				</>
			)}
		</>
	);
};

export default Statistics;
