import {objectModule} from './objects';
import {iDNum} from './objects';
import {buttons} from './buttons';

const render = (() => {
    
    function createDeleteButton (row) {
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteTask');
        deleteButton.textContent = 'X';
        row.appendChild(deleteButton);
        
        buttons.deleteTask(deleteButton);
    };
     
    function rowContent (parent) {
        let headingOne = document.createElement('h1');
        let headingTwo = document.createElement('h2');
        
        headingOne.textContent = document.getElementById('date').value;
        headingTwo.textContent = document.getElementById('task').value;


        parent.appendChild(headingOne);
        parent.appendChild(headingTwo);
    };

    const createRow = () => {
        let row = document.createElement('div');
        let main = document.querySelector('.main'); 
        let id = iDNum - 1;
        
        row.setAttribute('id', `${id}`);
        row.classList.add('row');
       
        main.appendChild(row);
        
        rowContent(row);
        createDeleteButton(row);

    };

    
    
    return {createRow}
})();


export {render};