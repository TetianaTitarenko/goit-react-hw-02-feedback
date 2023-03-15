import { useState } from "react";
import Section from "./Section/Section";
import Button from "./Button/Button";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addReviewGood = () => { setGood(prevGood => prevGood + 1) };

  const addReviewNeutral = () => { setNeutral(prevNeutral => prevNeutral + 1) };

  const addReviewBad = () => { setBad(prevBad => prevBad + 1) };

  const total = good + neutral + bad;
  const positive = (good / total * 100).toFixed(0)
  return (
    <div>
      <Section title="Please leave feedback">
        <Button
          onGood={addReviewGood}
          onNeutral={addReviewNeutral}
          onBad={addReviewBad}>
        </Button>
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad} total={total}
            positive={positive}>
          </Statistics>
        </Section>) :
        (<Section title="Statistics">
          <Notification message="There is no feedback" />
        </Section>)}
    </div>
  );
};

export default App