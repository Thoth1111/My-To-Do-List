import './style.css';
import Firsticon from './images/refresh-cw.svg';
import Secondicon from './images/corner-down-left.svg';
import Thirdicon from './images/more-vertical.svg';
import Fourthicon from './images/trash-2.svg';
import {
  toDoList, refreshDiv, enterDiv, refreshImg, enterImg, listSort, addInput, listWindow, clearAll,
} from './modules/variables.js';

refreshImg.src = Firsticon;
enterImg.src = Secondicon;
refreshDiv.appendChild(refreshImg);
enterDiv.appendChild(enterImg);

function Options(items) {
  items.forEach((n) => {
    n.addEventListener('click', () => {
      const remover = n.previousElementSibling;
      remover.classList.toggle('active');
    });
  });
}

class Manager {
  constructor() {
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
    };
    this.toDoList = [...this.toDoList, entry];
    localStorage.setItem('compiled', JSON.stringify(this.toDoList));
    this.listRender();
  }

  listRender() {
    let lists = '';
    const sortedList = listSort(this.toDoList);
    sortedList.forEach((entry) => {
      let done;
      let checked;
      if (entry.complete === true) {
        done = 'done';
        checked = 'checked';
      } else {
        done = '';
        checked = '';
      }

      lists
      += `<div class="entry">
        <div>
        <input type="checkbox" class="boxes" ${checked} name="checkbox" id="${entry.index}">
        <input type="text" size="125" class="detail ${done}" id="${entry.index}" value="${entry.description}"></input>
        </div>
        <img src='${Fourthicon}' class='trash-icon' id='${entry.index}'>
        <img src='${Thirdicon}' class='dots' id='${entry.index}'>
      </div>`;
    });
    listWindow.innerHTML = lists;
    const moreIcon = document.querySelectorAll('.dots');
    Options(moreIcon);
    const disposeBtn = document.querySelectorAll('.trash-icon');
    this.listRemoval(disposeBtn);
    const details = document.querySelectorAll('.detail');
    this.update(details);
    const status = document.querySelectorAll('.boxes');
    this.mark(status);
  }

  listRemoval(disposeBtn) {
    disposeBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = btn.getAttribute('id');
        this.toDoList.splice(index, 1);
        if (this.toDoList.length > 0) {
          this.toDoList.forEach((entry, i) => {
            entry.index = i;
          });
        }
        localStorage.setItem('compiled', JSON.stringify(this.toDoList));
        this.listRender();
      });
    });
  }

  update(details) {
    details.forEach((text) => {
      text.addEventListener('keyup', (e) => {
        if (e.key !== 'Enter' || !text.value) return;

        const index = text.getAttribute('id');
        this.toDoList[index].description = text.value;
        localStorage.setItem('compiled', JSON.stringify(this.toDoList));
        this.listRender();
      });
    });
  }

  mark(status) {
    status.forEach((checker) => {
      checker.addEventListener('change', () => {
        const task = checker.nextElementSibling;
        const index = task.getAttribute('id');
        task.classList.toggle('done');
        if (task.classList.contains('done')) {
          this.toDoList[index].complete = true;
        } else {
          this.toDoList[index].complete = false;
        }
        localStorage.setItem('compiled', JSON.stringify(this.toDoList));
        // this.listRender();
      });
    });
  }

  clear() {
    this.toDoList = this.toDoList.filter((entry) => entry.complete === false);
    this.toDoList = listSort(this.toDoList);
    localStorage.setItem('compiled', JSON.stringify(this.toDoList));
    this.resetIndex();
    this.listRender();
  }

  resetIndex() {
    for (let i = 0; i < this.toDoList.length; i += 1) {
      this.toDoList[i].index = i;
    }
    localStorage.setItem('compiled', JSON.stringify(this.toDoList));
    this.listRender();
  }
}

const plan = new Manager();
window.addEventListener('load', () => { plan.listRender(); });

addInput.addEventListener('keyup', (e) => {
  if (e.key !== 'Enter' || !addInput.value) return;
  plan.listAddition();
  addInput.value = '';
});

enterImg.addEventListener('click', () => {
  if (!addInput.value) return;
  plan.listAddition();
  addInput.value = '';
});

clearAll.addEventListener('click', () => {
  plan.clear();
});