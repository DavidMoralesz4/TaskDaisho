import React from "react";
import { Task } from "../interfaces";
import { useDispatch } from "react-redux";
import { toggleTask } from "../redux/features/tasks/tasksSlice";
import { deleteTask } from "../redux/features/tasks/tasksSlice";

const TaskCard = ({ title, completed, description, id }: Task) => {
  // const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const dispatch  = useDispatch()

  return (
    <>
      <div
        className="container-primary"
      >
        <div style={{ textDecoration: completed ? "line-through" : "none" }}>
          <h3 className="text-white">{title}</h3>
          <p>{description}...</p>
        </div>

        <div className="container-check">
          <div className="check">
            <input type="checkbox" className="form-check-input " />
            <label htmlFor="">In progress</label>
          </div>

          <div className="check" >
            <input type="checkbox" className="form-check-input " onClick={() => dispatch(toggleTask(id))} />
            <label htmlFor="">Completed</label>
          </div>

          <div className="check">
            <input type="checkbox" className="form-check-input" onClick={()=> dispatch(deleteTask(id))}/>
            <label htmlFor="">Deleted</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
