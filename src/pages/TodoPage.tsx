import { Button, Card, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { Plus } from "tabler-icons-react";
import { FilterEnum, Task } from "../features/TodosList/utils/types";
import { todosListStore } from "../features/TodosList/store/todosListStore";
import { TodosList } from "../features/TodosList/TodosList";
import { useTranslation } from "react-i18next";
import { FiltersPanel } from "../features/TodosList/FiltersPanel";
import { CreateTask } from "../features/TodosList/CreateTask";
import styles from "./todo-page.module.scss";

const getFilteredTasks = (filter: FilterEnum, tasks: Task[]) => {
  switch (filter) {
    case FilterEnum.ACTIVE:
      return tasks.filter((task) => !task.done);
    case FilterEnum.COMPLETED:
      return tasks.filter((task) => task.done);

    default:
      return tasks;
  }
};

const TodoPage = () => {
  const { t } = useTranslation();
  const tasks = todosListStore((state) => state.tasks);
  const filter = todosListStore((state) => state.filter);
  const filteredTasks = getFilteredTasks(filter, tasks);

  return (
    <Card className={styles.wrapper}>
      <Title>{t("todos")}</Title>
      <CreateTask />
      <TodosList tasks={filteredTasks} />
      <FiltersPanel />
    </Card>
  );
};

export default TodoPage;
