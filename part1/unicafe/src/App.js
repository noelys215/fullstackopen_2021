import { useState } from 'react';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;
const Header = ({ text }) => {
	return <h1>{text}</h1>;
};

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	const total = good + neutral + bad;

	if (total === 0) {
		return <div>No feedback given</div>;
	}

	const average = () => (good - bad) / total;
	const positive = () => `${(good / total) * 100}%`;

	return (
		<table>
			<tbody>
				<StatisticLine text="good" value={good} />
				<StatisticLine text="neutral" value={neutral} />
				<StatisticLine text="bad" value={bad} />
				<StatisticLine text="all" value={total} />
				<StatisticLine text="average" value={average()} />
				<StatisticLine text="positive" value={positive()} />
			</tbody>
		</table>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleClickGood = () => {
		return setGood(good + 1);
	};
	const handleClickBad = () => {
		return setBad(bad + 1);
	};
	const handleClickNeutral = () => {
		return setNeutral(neutral + 1);
	};

	return (
		<div>
			<Header text="Give Feedback" />
			<Button handleClick={handleClickGood} text="good"></Button>
			<Button handleClick={handleClickNeutral} text="neutral"></Button>
			<Button handleClick={handleClickBad} text="bad"></Button>
			<Header text="statistics" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
