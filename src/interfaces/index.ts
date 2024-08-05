export interface Task {
  id?: number;
  title: string;
  description: string;
  completed?: boolean;
}

export interface TaskState {
  tasks: Task[];
}

export interface TaskListProps {
  tasks: Task[];
}

export interface PropsModalButton {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

