import { Button, List, Text } from "@mantine/core";

import styles from "./todos-list.module.scss";
import { todosListStore } from "./store/todosListStore";
import { Check, Trash } from "tabler-icons-react";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { Task } from "./utils/types";

const cx = classNames.bind(styles);

interface ITodoListProps {
  tasks: Task[];
}

export const TodosList = ({ tasks }: ITodoListProps) => {
  const setTasks = todosListStore.getState().setTasks;

  // Проверка localStorage при первоначальной загрузке компонента
  useEffect(() => {
    const savedTasksString = localStorage.getItem("tasks");
    if (savedTasksString) {
      const savedTasks = JSON.parse(savedTasksString);
      if (savedTasks.length > 0) {
        setTasks(savedTasks);
      }
    }
  }, []);

  const toggleTaskDone = (taskId: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    taskId: number
  ) => {
    e.stopPropagation();
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <List className={styles.taskList}>
      {tasks.map((task) => (
        <li
          className={`${styles.task} `}
          key={task.id}
          onClick={() => toggleTaskDone(task.id)}
        >
          <Button variant="link" size="xs" className={styles.checkBtn}>
            {task.done ? <Check color="green" /> : null}
          </Button>
          <Text className={cx(styles.taskText, { [styles.done]: task.done })}>
            {task.text}
          </Text>
          <Button
            variant="link"
            onClick={(e) => deleteTask(e, task.id)}
            size="xs"
            ml={2}
            style={{
              width: 40,
              height: 40,
              padding: 0,
              background: "red",
              borderRadius: "50%",
            }}
          >
            <Trash width={25} height={25} />
          </Button>
        </li>
      ))}
    </List>
  );
};
