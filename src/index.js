import './style.css';

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
        <input type="checkbox" name="status" id="status">
        <span id="detail">${entry.description}</span>
        <img src='' alt='more-icon'>
        </div>`;
    });
  
    listWindow.innerHTML = lists;
};
  
  
window.addEventListener('load', tasksRender);

