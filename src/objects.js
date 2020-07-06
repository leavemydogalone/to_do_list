import { pull } from "lodash";

// import {iDNum} from './index';
let iDNum = 0;
const objectModule = (() => {
    let taskArr = [];
    
    const taskFactory = (name, date) => {
        let id = iDNum;
        iDNum++;
        console.log(taskArr);
        return {name, date, id}
    };
    
    const deleteObject = (button) => {
        const buttonParentID = button.parentElement.id;
        const targetIndex = taskArr.findIndex(item => item.id === buttonParentID);
        taskArr.splice(targetIndex, 1);
    };

    return {
        taskFactory, 
        taskArr,
        deleteObject,

    };
})();

export {objectModule, iDNum};