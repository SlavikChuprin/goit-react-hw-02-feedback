import React from "react";
// import PropTypes from 'prop-types';
import s from './Section.module.css';
import Notification from "../Notification/Notification";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";

const Section = ({title}, {onIncrement}, {onTotal, onPositivePercentage} ) => {
  return (
    <div>
    <section className={s.section}>{title[0]}
    
    <FeedbackOptions onLeaveFeedback={onIncrement}/>
    
    </section>
   
   <section className={s.section}>{title[1]}
    
    <Notification message="No feedback given"/>
    <Statistics onTotal={onTotal} onPositivePercentage={onPositivePercentage} />
    
    </section>
   </div>
  );
};

// Section.propTypes = {

// };

export default Section;