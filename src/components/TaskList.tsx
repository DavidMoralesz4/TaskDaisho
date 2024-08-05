import React from "react";
import TaskCard from "./TaskCard";
import { TaskListProps } from "../interfaces";

const TaskList = ({ tasks }:TaskListProps) => {
  // const tasks = useSelector((state: RootState) => state.tasks.tasks);
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <div className="p-3 bg-primary w-auto move-list">
            <TaskCard
              title={task.title}
              completed={task.completed}
              description={task.description}
              id={task.id}
            />
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default TaskList;
