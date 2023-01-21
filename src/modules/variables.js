export const refreshDiv = document.querySelector('#refresh-img');
export const enterDiv = document.querySelector('#enter-img');
export const refreshImg = new Image();
export const enterImg = new Image();
export const toDoList = JSON.parse(localStorage.getItem('compiled'));
export const listSort = (arr) => arr.slice().sort((a, b) => a.index - b.index);
export const addInput = document.querySelector('.add-input');
export const listWindow = document.querySelector('.list-window');
export const clearAll = document.querySelector('#clear-done');