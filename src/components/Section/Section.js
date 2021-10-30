import React from "react";
import PropTypes from 'prop-types';
import s from './Section.module.css';
import Notification from "../Notification/Notification";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";

const Section = ({} ) => {
  return (
    <div>
    <section className={s.section} >Please leave feedback
    <FeedbackOptions />
    </section>
   
    <section className={s.section} >Statistics
    <Notification message="No feedback given"/>
    
 
     
    </section>
   </div>
   
  );
};

Section.propTypes = {
title:PropTypes.string.isRequired,
};

export default Section;