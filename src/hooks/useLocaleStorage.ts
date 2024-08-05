import { useDispatch } from "react-redux";
import { Task } from "../interfaces";
import { useEffect, useState } from "react";
import { updateTasks } from "../redux/features/tasks/tasksSlice";

export const useLocalStorage = (key: string, initialValue: Task[]) => {
  // const [tasks, setTasks] = useState<Task[]>(initialValue)
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(key);
        let parsedItem: Task[] = [];

        if (!localStorageItems) {
          localStorage.setItem(key, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItems);
          // setTasks(parsedItem)
          // dispatch(updateTasks(parsedItem))
        }

        dispatch(updateTasks(parsedItem));
      } catch (error) {
        console.error("Failed to load tasks from localStorage", error);
      }
      setLoading(false);
    }, 2000);
  }, []);

  const saveToLocalStorage = (newItems: Task[]) => {
    if (newItems) {
      localStorage.setItem(key, JSON.stringify(newItems));
      dispatch(updateTasks(newItems));
      // console.log("Saved to localStorage:", newItems); // <-- Agregado para depuración
    }
  };

  return { saveToLocalStorage, loading, progress, setProgress };
};
