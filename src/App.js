import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackOptionBtnClick = event => {
    const option = event.target.dataset.buttonType;

    this.setState(prevState => {
      return { ...prevState, [option]: (prevState[option] += 1) };
    });
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce((acc, key) => {
      return (acc += this.state[key]);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const persentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    return persentage ? persentage : 0;
  };

  render() {
    return (
      <div className="App">
        {/* <p>Please leave feedback</p>
        <ul>
          {Object.keys(this.state).map(key => (
            <li key={key}>
              <button
                type="button"
                onClick={this.feedbackOptionBtnClick}
                data-button-type={key}
              >
                {key}
              </button>
            </li>
          ))}
        </ul> */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedbackOptionBtnClick}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
        {/* <h2>Statistics</h2>
        <ul>
          {Object.keys(this.state).map(key => (
            <li key={key}>
              {key}: {this.state[key]}
            </li>
          ))}
        </ul>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback:{this.countPositiveFeedbackPercentage()}</p> */}
      </div>
    );
  }
}

export default App;
