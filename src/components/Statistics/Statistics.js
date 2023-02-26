const Statistics = ({good, neutral, bad, total, positive}) => (
<ul className="">
<li className="">Good: {good}</li>
<li className="">Neutral: {neutral}</li>
<li className="">Bad: {bad}</li>
<li>Total: {total} </li>
<li> Positive feedback: {positive} %</li>
</ul>);

export default Statistics