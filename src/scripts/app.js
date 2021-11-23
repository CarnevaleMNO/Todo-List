import styles from "../css/styles.css";
import {showDailyList} from "./showLists.js";
import {showWeeklyList} from "./showLists.js";
import {showMonthlyList} from "./showLists.js";
import {showYearlyList} from "./showLists.js";

window.addEventListener('DOMContentLoaded', showDailyList);
window.addEventListener('DOMContentLoaded', function(){
    daily.classList.add('active')
});

//Lists
const daily = document.querySelector('#daily');
daily.addEventListener('click', function(){
    question.innerText = 'Your Daily List'
});
daily.addEventListener('click', showDailyList);
daily.addEventListener('click', function(){
    daily.classList.add('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
    yearly.classList.remove('active')
});

const weekly = document.querySelector('#weekly');
weekly.addEventListener('click', function(){
    question.innerText = 'Your Weekly List'
});
weekly.addEventListener('click', showWeeklyList);
weekly.addEventListener('click', function(){
    daily.classList.remove('active')
    weekly.classList.add('active')
    monthly.classList.remove('active')
    yearly.classList.remove('active')
});

const monthly = document.querySelector('#monthly');
monthly.addEventListener('click', function(){
    question.innerText = 'Your Monthly List'
});
monthly.addEventListener('click', showMonthlyList);
monthly.addEventListener('click', function(){
    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthly.classList.add('active')
    yearly.classList.remove('active')
});

const yearly = document.querySelector('#yearly');
yearly.addEventListener('click', function(){
    question.innerText = 'Your Yearly List'
});
yearly.addEventListener('click', showYearlyList);
yearly.addEventListener('click', function(){
    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
    yearly.classList.add('active')
});








// //Test Build
// import component from './component.js';
// console.log("I'm here!");
// document.body.append(component())
