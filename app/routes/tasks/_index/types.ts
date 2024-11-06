export type Task = {
  id: string;
  title: string;
  content: SubTask[];
};

export type SubTask = {
  id: string;
  content: string;
  exp: number;
};
