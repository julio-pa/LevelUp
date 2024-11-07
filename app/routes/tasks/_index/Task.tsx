import type { Task } from "./types";

type Props = {
  task: Task;
};
export default function Task({ task }: Props) {
  return (
    <div className="border border-orange-500 rounded-2xl p-3">
      <h1 className="font-semibold text-xl">{task.title}</h1>
      <div className="flex flex-col gap-1">
        {task.content.map(({ content, exp }, index) => (
          <div key={index} className="flex justify-between">
            <p>{content}</p>
            <p className="bg-orange-500 px-3 rounded-2xl">+ {exp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
