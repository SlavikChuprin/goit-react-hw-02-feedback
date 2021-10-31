import React from "react";
import PropTypes from 'prop-types';
import s from './Section.module.css';
import Notification from '../Notification';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';

const Section = ({title, onIncrement, state, onTotal, onPositivePercentage} ) => {
  return (
    <div>
    <section className={s.section}>{title[0]}
    
    <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={onIncrement}/>
    
    </section>
   
   <section className={s.section}>{onTotal(state) === 0 ? '' : title[1]}
    {onTotal(state) === 0  ? <Notification message="No feedback given..."/> : <Statistics options= {state} onTotal={onTotal} onPositivePercentage={onPositivePercentage} />  }
    </section>
   </div>
  );
};

Section.propTypes = {
  title:PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  onTotal: PropTypes.func.isRequired,
  onPositivePercentage:PropTypes.func.isRequired,
};

export default Section;