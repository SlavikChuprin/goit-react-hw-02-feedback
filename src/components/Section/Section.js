import React from "react";
import PropTypes from 'prop-types';
import s from './Section.module.css';
import Notification from "../Notification/Notification";

const Section = ({
title,
} ) => {
  return (
    
    <section className={s.section}>{title}
 
    <Notification message="No feedback given"/>
    
    </section>
   
   
  );
};

Section.propTypes = {
title:PropTypes.string.isRequired,
};

export default Section;