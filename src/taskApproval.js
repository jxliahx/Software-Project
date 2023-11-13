/*import CheckIcon from '@mui/icons-material/Check';*/
/*import CloseIcon from '@mui/icons-material/Close';*/
import React, { useState } from 'react';
import './KFstyle.css';
import NavigationBar from './NavigationBar';
export default function TaskApproval(){
  
return (
    <div class="ContainerK2">
        <NavigationBar/>
        <h1 class="t1">Task 1</h1>
        <form>
            <div class="taskDiv">
                <h2 class="task">Completed by: Member 1</h2>
                <div class="files">
                <p class="f">Files</p>
                <p>File 1</p>
                <p>File 2</p>
                </div>
            </div>
            <div class="yn">
            <button class="yes"></button><button class="no"></button>
            </div>
        </form>
    </div>
)
}