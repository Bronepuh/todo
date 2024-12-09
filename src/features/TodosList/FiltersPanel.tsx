import { Button, Flex } from "@mantine/core";
import { todosListStore } from "./store/todosListStore";
import { FilterEnum } from "./utils/types";
import { useTranslation } from "react-i18next";

export const FiltersPanel = () => {
  const { t } = useTranslation();
  const filter = todosListStore((state) => state.filter);
  const setFilter = todosListStore.getState().setFilter;

  const tasks = todosListStore((state) => state.tasks);
  const setTasks = todosListStore.getState().setTasks;

  const handleClearCompleted = () => {
    const newTasks = tasks.map((task) => {
      const newTask = { ...task, done: false };
      return newTask;
    });
    setTasks(newTasks);
  };
  return (
    <Flex w={"100%"} justify={"space-between"}>
      <Flex w={250}></Flex>

      <Flex gap={10} w={350} mb={10}>
        <Button
          variant={`${filter === FilterEnum.ALL ? "filled" : "outline"}`}
          onClick={() => setFilter(FilterEnum.ALL)}
        >
          {t("all")}
        </Button>
        <Button
          variant={`${filter === FilterEnum.ACTIVE ? "filled" : "outline"}`}
          onClick={() => setFilter(FilterEnum.ACTIVE)}
        >
          {t("active")}
        </Button>
        <Button
          variant={`${filter === FilterEnum.COMPLETED ? "filled" : "outline"}`}
          onClick={() => setFilter(FilterEnum.COMPLETED)}
        >
          {t("completed")}
        </Button>
      </Flex>
      <Flex w={250} justify={"flex-end"} ml={10}>
        <Button
          variant={`${filter === FilterEnum.ALL ? "filled" : "outline"}`}
          onClick={handleClearCompleted}
        >
          {t("clear_completed")}
        </Button>
      </Flex>
    </Flex>
  );
};
