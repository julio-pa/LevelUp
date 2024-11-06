import { Task } from "~/routes/tasks/_index/types";

export const mockTasks: Task[] = [
  {
    id: "123",
    title: "Test1",
    content: [
      { id: "456", content: "loremipsunVaglioRagazzo", exp: 5 },
      { id: "456", content: "loremipsunVaglioRagazzo", exp: 5 },
      { id: "456", content: "loremipsunVaglioRagazzo", exp: 5 },
    ],
  },
  {
    id: "123",
    title: "Test1",
    content: [
      { id: "456", content: "loremipsunVaglioRagazzo", exp: 5 },
      { id: "456", content: "loremipsunVaglioRagazzo", exp: 5 },
    ],
  },
  {
    id: "123",
    title: "Test1",
    content: [{ id: "456", content: "loremipsunVaglioRagazzo", exp: 5 }],
  },
];
