import React from "react";
// import PropTypes from 'prop-types';
import s from './Statistics.module.css';


export default function Statistics({options}) {

    return (

        <ul className={s.statisticsList}>

        <li className={s.statisticsListItem}>Good: {options.good}</li>
        <li className={s.statisticsListItem}>Neutral: {options.neutral}</li>
        <li className={s.statisticsListItem}>Bad: {options.bad}</li>
        <li className={s.statisticsListItem}>Total:</li>
        <li className={s.statisticsListItem}>Positiv feedback: </li>
        </ul>
    );
}