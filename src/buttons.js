import {render} from './render';
import {objectModule} from './objects';

const buttons = (() => {
    const myForm = document.getElementById('frm1');

    function deleteTask (button) {
        button.addEventListener('click', () =>{
            button.parentElement.parentElement.removeChild(button.parentElement);
            objectModule.deleteObject(button);
        });
    };
    
    const form = (e) => {
        e.preventDefault();
        
        let newTask = objectModule.taskFactory(document.getElementById('task').value, 
        document.getElementById('date').value);
        objectModule.taskArr.push(newTask);

        render.createRow();

        document.forms[0].reset();

        // save task list array to local storage 
        localStorage.setItem('MyTaskList', JSON.stringify(objectModule.taskArr));

        console.log(objectModule.taskArr);
    };
    
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('formSubmit').addEventListener('click', form)
    });
    
    return {
        
        deleteTask,

    }
})();

export{buttons};