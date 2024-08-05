import React, { useState } from "react";
import { Task } from "../interfaces";
import { useDispatch } from "react-redux";
import { toggleTask } from "../redux/features/tasks/tasksSlice";
import { deleteTask } from "../redux/features/tasks/tasksSlice";
import { useLocalStorage } from "../hooks/useLocaleStorage";

const TaskCard = ({ title, completed, description, id }: Task) => {
  const dispatch  = useDispatch()

  return (
    <>
      <div
        className="container-primary"
        // style={{backgroundColor: inProgres ? "#399918" : 'none'}}
      >
        <div style={{ textDecoration: completed ? "line-through" : "none"}}>
          <h3 className="text-white">{title}</h3>
          <p>{description}...</p>
        </div>

        <div className="container-check">
          <div className="check" >
            <strong onClick={() => {}}>In progress</strong>
          </div>

          <div className="check" >
            {/* <input type="checkbox" className="form-check-input "  /> */}
            <strong onClick={() => dispatch(toggleTask(id))} >Completed</strong>
          </div>
          

          <div className="check">
            <strong onClick={()=> dispatch(deleteTask(id))} >Deleted</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
