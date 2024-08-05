import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TaskList from "./TaskList";
import { PropsModalButton, Task } from "../interfaces";
import { useLocalStorage } from "../hooks/useLocaleStorage";
import ButtonAdd from "./ButtonAdd";



export const TaskSearch = ({ setActive }: PropsModalButton) => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  const allTasks = useSelector((state: RootState) => state.tasks.tasks);
  const { loading } = useLocalStorage("tasksState", []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // console.log(query)

    const tasksMatchingQuery = allTasks.filter((task) =>
      task.title.toLowerCase().includes(query)
    );
    setFilteredTasks(tasksMatchingQuery);
  };

  return (
    <>
      <div className="d-flex search-container2">
        <input
          className="form-control me-sm-2 my-2 search"
          type="search"
          placeholder="Search task"
          value={searchQuery}
          onChange={handleInputChange}
        />

      </div>

      <div className="container-bottom">
        <ButtonAdd setActive={setActive} />
      </div>

      <div className="container-tasks1">
        {loading ? <p>Loading...</p> : ""}
        {/* <TaskList /> */}
        <TaskList tasks={searchQuery ? filteredTasks : allTasks} />
      </div>
    </>
  );
};
