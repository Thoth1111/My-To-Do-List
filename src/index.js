import './style.css';
import Thirdicon from './images/more-vertical.svg';
import Firsticon from './images/refresh-cw.svg';
import Secondicon from './images/corner-down-left.svg';
import { toDoList, refreshDiv, enterDiv, refreshImg, enterImg, listSort } from './modules/variables';

refreshImg.src = Firsticon;
enterImg.src = Secondicon;
refreshDiv.appendChild(refreshImg);
enterDiv.appendChild(enterImg);

// const toDoList = [
//   {
//     index: 0,
//     description: 'Wash dishes',
//     completed: true,
//   },
//   {
//     index: 1,
//     description: 'Buy Groceries',
//     completed: true,
//   },
//   {
//     index: 2,
//     description: 'Meet with Lawyer',
//     completed: true,
//   },
//   {
//     index: 3,
//     description: 'Pick up Kids',
//     completed: true,
//   },
//   {
//     index: 4,
//     description: 'Attend virtual coding conference',
//     completed: true,
//   },
// ];

class Task {
  constructor (description) {
    this.description = description;
    complete = false;
    id = toDoList.length + 1;
  }
}

class Manager {
  constructor (toDoList) {
    this.toDoList = toDoList;
  }

  listAddition() {
    const listItem = new Task(description.value);
    if (!this.toDoList) {
      this.toDoList = [];
    }
    this.toDoList.push(listItem);
    localStorage.setItem('compiled', JSON.stringify(this.toDoList));
    this.listRender();
  }

  listRender() {
    const listWindow = document.querySelector('.list-window');
    let lists = '';
    const sortedList = listSort(toDoList);
    sortedList.forEach((entry) => {
      lists += 
      `<div class="entry">
        <div>
        <input type="checkbox" class="boxes" name="status" id="status">
        <input type="text" size="125" class="detail" value="${entry.description}"></input>
        </div>
        <img src='${Thirdicon}' id='more-icon' alt='more-icon'>
      </div>`;
    })
    listWindow.innerHTML = lists;    
  }

}

// const tasksRender = () => {
//   const listWindow = document.querySelector('.list-window');
//   let lists = '';

//   const listSort = (arr) => arr.slice().sort((a, b) => a.index - b.index);

//   const sortedList = listSort(toDoList);

//   sortedList.forEach((entry) => {
//     lists += `<div class="entry">
//         <div>
//         <input type="checkbox" class="boxes" name="status" id="status">
//         <input type="text" size="125" class="detail" value="${entry.description}"></input>
//         </div>
//         <img src='${Thirdicon}' id='more-icon' alt='more-icon'>
//         </div>`;
//   });

//   listWindow.innerHTML = lists;
// };

window.addEventListener('load', tasksRender);
