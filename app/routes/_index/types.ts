import { Task } from "../tasks/_index/types";

export type RequestTask = Omit<Task, "id">;
