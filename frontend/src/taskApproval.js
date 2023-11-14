/*import CheckIcon from '@mui/icons-material/Check';*/
/*import CloseIcon from '@mui/icons-material/Close';*/
import React, { useState } from 'react';
import './taskApproval.css';
import NavigationBar from './NavigationBar'; 
export default function TaskApproval(){
  

return (
    <div class="Container-ta">
        
        <NavigationBar/>
        <h1 class="t1-ta">Task 1</h1>
        <form>
            <div class="taskDiv-ta">
                <h2 class="task-ta">Completed by: Member 1</h2>
                <div class="files-ta">
                <p class="f-ta">Files</p>
                <p>File 1</p>
                <p>File 2</p>
                </div>
            </div>
            <div class="yn-ta">
            <button class="yes-ta"></button><button class="no-ta"></button>
            </div>
        </form>
    </div>
)
}