import _ from 'lodash';
import './style.css';
import Thirdicon from './images/more-vertical.svg';
import Firsticon from './images/refresh-cw.svg';
import Secondicon from './images/corner-down-left.svg'

const refreshDiv = document.querySelector('#refresh-img');
const enterDiv = document.querySelector('#enter-img');
const refreshImg = new Image();
const enterImg = new Image();
refreshImg.src = Firsticon;
enterImg.src = Secondicon;
refreshDiv.appendChild(refreshImg);
enterDiv.appendChild(enterImg);

const toDoList = [
    {
        index: 0,
        description: 'Wash dishes',
        completed: true,
    },
    {
        index: 1,
        description: 'Buy Groceries',
        completed: true,
    },
    {
        index: 2,
        description: 'Meet with Lawyer',
        completed: true,
    },
    {
        index: 3,
        description: 'Pick up Kids',
        completed: true,
    },
    {
        index: 4,
        description: 'Attend virtual coding conference',
        completed: true,
    },
];


const tasksRender = () => {
    const listWindow = document.querySelector('.list-window');
    let lists = '';
  
    const listSort = (arr) => arr.slice().sort((a, b) => a.index - b.index);
  
    const sortedList = listSort(toDoList);
  
    sortedList.forEach((entry) => {
      lists += `<div class="entry">
        <div>
        <input type="checkbox" class="boxes" name="status" id="status">
        <span id="detail">${entry.description}</span>
        </div>
        <img src='${Thirdicon}' id='more-icon' alt='more-icon'>
        </div>`;
    });
  
    listWindow.innerHTML = lists;
};
  
  
window.addEventListener('load', tasksRender);

