import React, { Component } from 'react';
import './App.css';
// import Section from './components/Section/Section';
// import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
// import Statistics from './components/Statistics/Statistics';
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

  total = (state) =>  Object.values(state).reduce((total, option)=>(total+=option),0);
  positivePercentage = (state)=> Math.round((state.good/this.total())*100);
render () {
 
  return (

    <div className="App">
      <Section title={["Please leave feedback", "Statistics"]} 
      onIncrement= {this.handleIncrement} 
      state={this.state}
      onTotal= {this.total} 
      onPositivePercentage={this.positivePercentage}
            
      />
    </div>
  );
}
}

export default App;
