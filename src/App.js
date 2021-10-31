import React, { Component } from 'react';
import './App.css';
import Section from './components/Section';


class App extends Component {

  state = { 
    good: 0,
    neutral:0,
    bad:0,
  };

  handleIncrement = (e) => {
                   
       const  btnName =e.currentTarget.outerText; 
         
            this.setState( prevState => ({
                [btnName] : prevState[btnName] + 1,  
            }));
         
  };

  totalScore = (state) => Object.values(this.state).reduce((total, option)=>(total+=option),0);
  positivePercentage = (state)=> Math.round((this.state.good/this.totalScore())*100);
render () {
 
  return (

    <div className="App">
      <Section title={["Please leave feedback", "Statistics"]} 
       onIncrement= {this.handleIncrement} 
      state={this.state}
      onTotal= {this.totalScore} 
      onPositivePercentage={this.positivePercentage}
            
      />
    </div>
  );
}
}

export default App;