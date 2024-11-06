import { LayoutList, Plus } from "lucide-react";
import ActionButton from "./ActionButton";
import { Link } from "@remix-run/react";
import { mockTasks } from "mock";
import Task from "~/routes/tasks/_index/Task";

export default function SideBar() {
  return (
    <div className="sticky top-0 w-[30%] py-3 px-6 border-r border-orange-500 flex flex-col gap-3">
      <Link
        to="/"
        className="flex items-center text-2xl text-orange-500 font-semibold  justify-center"
      >
        <img src="/LevelUpLogo.png" alt="logo" className="w-20 h-20" />{" "}
        <h1>LevelUp</h1>
      </Link>
      <Link to="/">
        <ActionButton title="Add a new task" icon={<Plus />} />
      </Link>
      <Link
        to="/tasks"
        className="text-2xl flex items-center gap-3 font-semibold"
      >
        <LayoutList /> Your Tasks
      </Link>
      <div className="flex flex-col gap-3">
        {mockTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
