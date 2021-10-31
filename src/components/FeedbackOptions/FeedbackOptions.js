import React from "react";
import s from './FeedbackOptions.module.css';

 const FeedbackOptions = ({options, onLeaveFeedback}) => {

  return (
    <div>
      { options.map(option=> ( <button type='button' className={s.button} onClick={onLeaveFeedback}>{option}</button>))}
    
   </div>
  );
}


export default FeedbackOptions;