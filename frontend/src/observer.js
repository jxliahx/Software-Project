import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import currentTask from "./observer"; 
import awaitingApproval from "./observer"; 
import completedTask from "/.observer"; 

class TaskData{
    constructor(){
        this.observers = []; 
    }

    register(func){
        this.observers.push(func); 

    }

    unregister(func){
        this.observers = this.observers.filter(f => {
            return f !=func; 
        }); 

    }

    notify(){
        this.observers.forEach(observers => {
            observers(value); 
        }); 
    }
}

export default new TaskData(); 