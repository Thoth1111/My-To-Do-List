import './style.css';
import Firsticon from './images/refresh-cw.svg';
import Secondicon from './images/corner-down-left.svg';
import Thirdicon from './images/more-vertical.svg';
import Fourthicon from './images/trash-2.svg';
import { toDoList, refreshDiv, enterDiv, refreshImg, enterImg, listSort, addInput, listWindow } from './modules/variables';

refreshImg.src = Firsticon;
enterImg.src = Secondicon;
refreshDiv.appendChild(refreshImg);
enterDiv.appendChild(enterImg);

class Manager {
  constructor () {
    this.toDoList = toDoList;
  }

  listAddition() {   
    if (!this.toDoList) {
      this.toDoList = [];
    }
    const entry = {
      description: addInput.value,
      index: this.toDoList.length,
      complete: false,
    } 
    this.toDoList = [...this.toDoList, entry];
    localStorage.setItem('compiled', JSON.stringify(this.toDoList));
    this.listRender();
  }

  listRender() {
    let lists = '';
    const sortedList = listSort(this.toDoList);
    sortedList.forEach((entry) => {
      lists += 
      `<div class="entry">
        <div>
        <input type="checkbox" class="boxes" name="status" id="status">
        <input type="text" size="125" class="detail" value="${entry.description}"></input>
        </div>
        <img src='${Thirdicon}' id='more-icon' alt='more-icon'>
        <img src='${Fourthicon}' class='trash-icon' id='${entry.id}' alt='more-icon'>
      </div>`;
    })
    listWindow.innerHTML = lists;
    // const dispose = document.querySelector('.trash-icon');
    // this.dump(dispose)    
  }

  // dump(dispose) {
  //   dispose.forEach((can) => {
  //     can.addEventListener('click', () => {
  //       const index = can.getattribute('id');
  //       this.toDoList.splice(index,1);
  //       localStorage.setItem('compiled', JSON.stringify(this.toDoList));
  //       this.listRender();
  //     })
  //   })
  // }
}

const plan = new Manager();
window.addEventListener('load', () => {plan.listRender()});

addInput.addEventListener("keyup", (e) => {
  if (e.key !== 'Enter' || !addInput.value) return;
  else {
    console.log('entered')
    plan.listAddition();
    addInput.value = '';
    }
});

enterImg.addEventListener('click', () => {
  if(!addInput.value) return;
  else {
    plan.listAddition();
    addInput.value = '';
  }
}); 
