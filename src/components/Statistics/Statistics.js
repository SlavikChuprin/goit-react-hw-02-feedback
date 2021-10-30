import React from "react";
// import PropTypes from 'prop-types';
import s from './Statistics.module.css';


export default function Statistics({options}) {
const total = Object.values(options).reduce((total, option)=>(total+=option),0);
const positivePercentage = Math.round((options.good/total)*100);
    return (

        <ul className={s.statisticsList}>

        <li className={s.statisticsListItem}>Good: {options.good}</li>
        <li className={s.statisticsListItem}>Neutral: {options.neutral}</li>
        <li className={s.statisticsListItem}>Bad: {options.bad}</li>
        <li className={s.statisticsListItem}>Total: {total}</li>
        <li className={s.statisticsListItem}>Positiv feedback: {positivePercentage}%</li>
        </ul>
    );
}