export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export enum FilterEnum {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}
