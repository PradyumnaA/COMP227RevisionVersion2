import { useState } from "react";

const Statistics = (props) => {
    if (props.total === 0) {
        return (
            <div>
                <h1>{props.heading}</h1>
                No Feedbacks given
            </div>
        );
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <table>
                <tbody>
                <tr><td>Good {props.good}</td></tr>
                <tr><td>Bad {props.bad}</td></tr>
                <tr><td>Neutral {props.neutral}</td></tr>
                <tr><td>Average: {props.average.toFixed(2)}</td></tr>
                <tr><td>Total: {props.total}</td></tr>
                <tr><td>Positive: {props.positive.toFixed(2)}%</td></tr>
                </tbody>
            </table>
        </div>
    );
};

const Button = (props) => {
    return (
        <button onClick={props.onClick} className="button">
            {props.text}
        </button>
    );
};

const GiveFeedback = (props) => {
    return (
        <div>
            <h1>{props.heading}</h1>
            <Button onClick={props.onGoodClick} text="Good" />
            <Button onClick={props.onBadClick} text="Bad" />
            <Button onClick={props.onNeutralClick} text="Neutral" />
        </div>
    );
};

const App = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [total, setTotal] = useState(0);
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState(0);

    const handleGoodClick = () => {
        const updatedGood = good + 1;
        const updatedTotal = updatedGood + bad + neutral;
        const updatedAverage = (updatedGood - bad) / updatedTotal;
        const updatedPositive = (updatedGood / updatedTotal) * 100;
        setGood(updatedGood);
        setTotal(updatedTotal);
        setAverage(updatedAverage);
        setPositive(updatedPositive);
    };

    const handleBadClick = () => {
        const updatedBad = bad + 1;
        const updatedTotal = good + updatedBad + neutral;
        const updatedAverage = (good - updatedBad) / updatedTotal;
        const updatedPositive = (good / updatedTotal) * 100;
        setBad(updatedBad);
        setTotal(updatedTotal);
        setAverage(updatedAverage);
        setPositive(updatedPositive);
    };

    const handleNeutralClick = () => {
        const updatedNeutral = neutral + 1;
        const updatedTotal = good + bad + updatedNeutral;
        const updatedAverage = (good - bad) / updatedTotal;
        const updatedPositive = (good / updatedTotal) * 100;
        setNeutral(updatedNeutral);
        setTotal(updatedTotal);
        setAverage(updatedAverage);
        setPositive(updatedPositive);
    };

    return (
        <div>
            <GiveFeedback
                heading="Give Feedback"
                onGoodClick={handleGoodClick}
                onBadClick={handleBadClick}
                onNeutralClick={handleNeutralClick}
            />
            <Statistics
                heading="Statistics"
                good={good}
                bad={bad}
                neutral={neutral}
                total={total}
                average={average}
                positive={positive}
            />
        </div>
    );
};

export default App;
