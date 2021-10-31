import React from "react";
// import PropTypes from 'prop-types';
import s from './Statistics.module.css';


export default function Statistics({options, onTotal, onPositivePercentage}) {
const total = onTotal(options);
const positivePercentage = onPositivePercentage(options);
    return (
     
        <ul className={s.statisticsList}>

        <li className={s.statisticsListItem}>Good: {options.good} </li>
        <li className={s.statisticsListItem}>Neutral: {options.neutral} </li>
        <li className={s.statisticsListItem}>Bad: {options.bad}</li>
        <li className={s.statisticsListItem}>Total: {total}</li>
        <li className={s.statisticsListItem}>Positiv feedback: {positivePercentage}%</li>
        </ul>
    
        
    );
}