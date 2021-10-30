import React from "react";
import s from './FeedbackOptions.module.css';

 const FeedbackOptions = ({onIncrement}) => {

  return (
    <div>
     <button className={s.button} onClick={onIncrement}>good</button>
     <button className={s.button} onClick={onIncrement}>neutral</button> 
     <button className={s.button} onClick={onIncrement}>bad</button>
   </div>
  );
}


export default FeedbackOptions;