import StatisticLine from './StatisticLine';

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
					<StatisticLine text='good' value={good} />
					<StatisticLine text='neutral' value={neutral} />
					<StatisticLine text='bad' value={bad} />
					<StatisticLine text='all' value={totalScore} />
					<StatisticLine text='average' value={average} />
					<StatisticLine text='positive' value={positive} />
				</>
			)}
		</>
	);
};

export default Statistics;
