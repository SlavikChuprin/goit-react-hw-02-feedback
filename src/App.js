import React, { Component } from 'react';
import './App.css';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
class App extends Component {

   static defaultProps = {
    initialRatingGood: 0,
    initialRatingNeutral: 0,
    initialRatingBad: 0,
  };

  // static propTypes = {
  //   //
  // };

  state = { 
    good: 0,
    neutral:0,
    bad:0,
  };

  handleIncrement = (e) => {
       const  btnName =e.currentTarget.outerText; 
          if (btnName === 'good') {
            this.setState( prevState => ({
                good : prevState.good + 1,  
            }));
          }
          if (btnName === 'neutral') {
            this.setState(prevState => ({
                neutral: prevState.neutral + 1,  
            })); 
          }
          if (btnName === 'bad') {
          this.setState(prevState => ({
              bad : prevState.bad + 1,  
          }));
        }
          
  };

render () {
 
  return (

    <div className="App">
      <FeedbackOptions onIncrement = {this.handleIncrement}/>
      <Section  props={['Please leave feedback','Statistics']} />
      <Statistics options={this.state}/>
    </div>
  );
}
}

export default App;
