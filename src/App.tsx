import { useEffect, useState } from "react";
import "./styles/layout.scss";
import logo from "./logo.svg";
import TaskList from "./components/TaskList";
import { TaskSearch } from "./components/TaskSearch";
import ButtonAdd from "./components/ButtonAdd";
import TaskForm from "./components/TaskForm";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useLocalStorage } from "./hooks/useLocaleStorage";

interface Title {
  title?: string;
}

function App({ title }: Title) {
  const [active, setActive] = useState(false);
  
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const { saveToLocalStorage, loading } = useLocalStorage("tasksState", []);

  useEffect(() => {
    if (tasks.length > 0) {
      saveToLocalStorage(tasks);
    }
  }, [tasks, saveToLocalStorage]);

  const onClose = () => {
    setActive(false);
  };

  return (
    <div className="bg-dark text-white app" >
      {/* NavBar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container ">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="react-logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="p-4">
        <h4 className="text-white m-5">
          Organize the tasks of your daily life, work, recipes, exercise
          routines, etc.
        </h4>
        <div className="container-search">
          <TaskSearch />
        </div>

        <div className="container-bottom">
          <ButtonAdd setActive={setActive} />
        </div>

        <div>
          {
            loading ? <p>Loading...</p> : ''
          }
          <TaskList />
        </div>
      </main>
      <TaskForm onClose={onClose} active={active} />
    </div>
  );
}

export default App;
