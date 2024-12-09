import { Button, TextInput } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import { todosListStore } from "./store/todosListStore";
import { useState } from "react";
import { Task } from "./utils/types";

export const CreateTask = () => {
  const tasks = todosListStore((state) => state.tasks);
  const setTasks = todosListStore.getState().setTasks;
  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleNewTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTask.trim() === "") {
      return;
    }

    const newTaskObj: Task = {
      id: Date.now(),
      text: newTask,
      done: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };
  return (
    <form
      onSubmit={handleNewTaskSubmit}
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10,
      }}
    >
      <TextInput
        value={newTask}
        onChange={handleNewTaskChange}
        placeholder="Enter a new task"
        style={{
          width: "calc(100% - 50px)",
        }}
        styles={{
          input: {
            height: 40,
          },
        }}
      />
      <Button
        type="submit"
        variant="filled"
        color="green"
        style={{
          width: 40,
          height: 40,
          padding: 5,
        }}
      >
        <Plus width={40} height={40} />
      </Button>
    </form>
  );
};
