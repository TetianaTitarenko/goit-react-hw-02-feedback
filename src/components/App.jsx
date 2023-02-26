import { Component } from "react";
import Section from "./Section/Section";
import Button from "./Button/Button";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

addReviewGood = () => {this.setState(prevState => ({good: prevState.good +1}))};

addReviewNeutral = () => {this.setState(prevState => ({neutral: prevState.neutral +1}))};

addReviewBad = () => {this.setState(prevState => ({bad: prevState.bad +1}))};

render() {
  const total = this.state.good + this.state.neutral + this.state.bad;
  const positive = (this.state.good / total*100).toFixed(0)
  return (
    <div>
      <Section title="Please leave feedback">
        <Button 
          onGood={this.addReviewGood} 
          onNeutral={this.addReviewNeutral} 
          onBad={this.addReviewBad}>
        </Button>
      </Section>
      {total > 0 ? (
      <Section title="Statistics">
        <Statistics 
          good={this.state.good} 
          neutral={this.state.neutral} 
          bad={this.state.bad} total={total} 
          positive={positive}>          
        </Statistics>
      </Section>) : 
      (<Section title="Statistics">
        <Notification message="There is no feedback" />
      </Section>)}
    </div>
  );
};
};

export default App

