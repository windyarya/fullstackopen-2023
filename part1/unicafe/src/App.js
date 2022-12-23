import { useState } from "react";

const Button = ({text, clickEvent}) => {
  return (
    <button onClick={clickEvent}>{text}</button>
  )
}

const StatisticLine = ({ text, val }) => {
  return (
    <p>{text} {val}</p>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let allVote = good + neutral + bad;
  let avg, positive;

  if (allVote > 0) {
    avg = roundNum((good - bad) / allVote);
    positive = roundNum((good / allVote) * 100);
  } else {
    avg = 0;
    positive = 0;
  }

  if (allVote === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <StatisticLine text="good" val={good} />
      <StatisticLine text="neutral" val={neutral} />
      <StatisticLine text="bad" val={bad} />
      <StatisticLine text="all" val={allVote} />
      <StatisticLine text="average" val={avg} />
      <StatisticLine text="positive" val={positive + "%"} />
    </div>
  )
}

const roundNum = (num) => {
  return Math.round(num *100) / 100;
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button clickEvent={() => setGood(good + 1)} text="good" />
      <Button clickEvent={() => setNeutral(neutral + 1)} text="neutral" />
      <Button clickEvent={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;