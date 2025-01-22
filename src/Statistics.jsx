const Statistics = ({ good, neutral, bad }) => {
	const totalScore = good + neutral + bad;
	const average =
		totalScore === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / totalScore;
	const positive = totalScore === 0 ? 0 : (good / totalScore) * 100;

	return (
		<>
			<p>all {totalScore}</p>
			<p>average {average}</p>
			<p>positive {positive}</p>
		</>
	);
};

export default Statistics;
