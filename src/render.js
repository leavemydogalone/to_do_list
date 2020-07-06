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
     
    const rowContent = () => {
        
    }

    const createRow = () => {
        let row = document.createElement('div');
        let main = document.querySelector('.main'); 
        let id = iDNum - 1;
        
        row.setAttribute('id', `${id}`);
        row.classList.add('row');
       
        createDeleteButton(row);
        main.appendChild(row);

    };

    const form = () => {
        let formDiv = document.createElement('div');
        let dateLabel = document.createElement()

    }
    
    return {createRow}
})();


export {render};