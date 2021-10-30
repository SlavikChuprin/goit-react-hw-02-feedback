import React from "react";
// import PropTypes from 'prop-types';
import s from './Section.module.css';
import Notification from "../Notification/Notification";
// import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
// import Statistics from "../Statistics/Statistics";

const Section = ({props}, {onClickBtn}) => {
  return (
      
    <div>
     {/* <section className={s.section}>{props[0]}
     <FeedbackOptions onIncrement= {onClickBtn} />
    </section> */}
    
    <section className={s.section}>{props[1]}
    

    <Notification message="No feedback given"/>
    
 
     
    </section>
   </div>
   
  );
};

// Section.propTypes = {

// };

export default Section;