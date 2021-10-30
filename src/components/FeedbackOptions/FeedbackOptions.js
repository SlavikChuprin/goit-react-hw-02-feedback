import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {


render() {
  return (
    <div>
     <button classname={s.button}>good</button>
     <button classname={s.button}>neutral</button> 
     <button classname={s.button}>bad</button>
   </div>
  );
}
};

FeedbackOptions.propTypes = {
options:PropTypes.object.isRequired,
};

export default FeedbackOptions;