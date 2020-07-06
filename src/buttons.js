import {render} from './render';
import {objectModule} from './objects';

const buttons = (() => {
    
    const newTaskButton = document.querySelector('#newTask');
    newTaskButton.addEventListener('click', () => {
        let newObj = objectModule.taskFactory('bart', 'simpson');
        objectModule.taskArr.push(newObj);
        render.createRow();
    });

    function deleteTask (button) {
        button.addEventListener('click', () =>{
            button.parentElement.parentElement.removeChild(button.parentElement);
            objectModule.deleteObject(button);
        });
    };
    
    
    return {
        
        deleteTask,

    }
})();

export{buttons};