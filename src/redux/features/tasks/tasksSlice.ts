import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskState, Task } from "../../../interfaces";

const initialState: TaskState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const newTask: Task = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.tasks.push(newTask);
      localStorage.setItem("tasksState", JSON.stringify(state.tasks)); // Setear valores desde el estado en redux
    },
    toggleTask: (state, action: PayloadAction<number | undefined>) => {
      const tasks = state.tasks.find((task) => task.id === action.payload);
      if (tasks) {
        tasks.completed = !tasks.completed;
        localStorage.setItem("tasksState", JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action: PayloadAction<number | undefined>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasksState", JSON.stringify(state.tasks));
    },
    updateTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
      localStorage.setItem("tasksState", JSON.stringify(state.tasks));
    },
    // searchTasks: (state, action: PayloadAction<string>) => {
    //   const searchTerm = action.payload.toLowerCase();
    //   state.tasks = state.tasks.filter((task) => {
    //     return task.title.toLowerCase().includes(searchTerm);
    //   });
    // },
  },
});

export const { addTask, toggleTask, deleteTask, updateTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
