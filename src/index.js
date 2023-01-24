import './style.css';
import Firsticon from './modules/images/refresh-cw.svg';
import Secondicon from './modules/images/corner-down-left.svg';
import { Manager, addInput } from './modules/variables.js';

const refreshDiv = document.querySelector('#refresh-img');
const enterDiv = document.querySelector('#enter-img');
const refreshImg = new Image();
const enterImg = new Image();
const clearAll = document.querySelector('#clear-done');

refreshImg.src = Firsticon;
enterImg.src = Secondicon;
refreshDiv.appendChild(refreshImg);
enterDiv.appendChild(enterImg);

const plan = new Manager();
window.addEventListener('load', () => { plan.listRender(); });

addInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && addInput.value) {
    plan.listAddition();
    addInput.value = '';
  }
});

enterImg.addEventListener('click', () => {
  if (addInput.value) {
    plan.listAddition();
    addInput.value = '';
  }
});

clearAll.addEventListener('click', () => {
  plan.clear();
});