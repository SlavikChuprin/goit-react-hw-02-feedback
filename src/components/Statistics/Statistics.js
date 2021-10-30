import React from "react";
// import PropTypes from 'prop-types';
import s from './Statistics.module.css';


export default function Statistics({onTotal, onPositivePercentage}) {
// const total = Object.values(options).reduce((total, option)=>(total+=option),0);
// const positivePercentage = Math.round((options.good/total)*100);
    return (
     
        <ul className={s.statisticsList}>

        <li className={s.statisticsListItem}>Good: </li>
        <li className={s.statisticsListItem}>Neutral: </li>
        <li className={s.statisticsListItem}>Bad:</li>
        <li className={s.statisticsListItem}>Total: {onTotal}</li>
        <li className={s.statisticsListItem}>Positiv feedback: {onPositivePercentage}%</li>
        </ul>
    
        
    );
}