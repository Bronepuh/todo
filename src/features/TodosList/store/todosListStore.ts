import { create } from "zustand";
import { produce } from "immer";
import { FilterEnum, Task } from "../utils/types";

interface ITodosListStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  filter: FilterEnum;
  setFilter: (filter: FilterEnum) => void;
}

export const todosListStore = create<ITodosListStore>((set) => ({
  tasks: [],
  filter: FilterEnum.ALL,
  setTasks: (tasks: Task[]) => {
    const tasksString = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksString);
    set(
      produce((store: ITodosListStore) => {
        store.tasks = tasks;
      })
    );
  },
  setFilter: (filter: FilterEnum) => {
    set(
      produce((store: ITodosListStore) => {
        store.filter = filter;
      })
    );
  },
}));
