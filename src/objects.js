import { pull } from "lodash";

// import {iDNum} from './index';
let iDNum = 0;
const objectModule = (() => {
    let taskArr = [];
    
    const taskFactory = (name, date) => {
        let id = iDNum;
        iDNum++;
        return {name, date, id}
    };
    
    return {taskFactory, taskArr};
})();

export {objectModule, iDNum};