import React from "react";
import s from './FeedbackOptions.module.css';

 const FeedbackOptions = ({onLeaveFeedback}) => {

  return (
    <div>
     <button className={s.button} onClick={onLeaveFeedback}>good</button>
     <button className={s.button} onClick={onLeaveFeedback}>neutral</button> 
     <button className={s.button} onClick={onLeaveFeedback}>bad</button>
   </div>
  );
}


export default FeedbackOptions;