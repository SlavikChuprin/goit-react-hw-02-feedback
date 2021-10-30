import React from "react";
// import PropTypes from 'prop-types';
import s from './Section.module.css';
import Notification from "../Notification/Notification";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";

const Section = () => {
  return (
    <div>
    <section className={s.section} >Please leave feedback
    <FeedbackOptions />
    </section>
   
    <section className={s.section} >Statistics
    <Statistics options={{good: 0,  neutral: 0,  bad: 0}}/>

    <Notification message="No feedback given"/>
    
 
     
    </section>
   </div>
   
  );
};

// Section.propTypes = {

// };

export default Section;