import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Dot, Plus, Save } from "lucide-react";
import { ReactElement, useEffect, useState } from "react";
import ActionButton from "~/components/ActionButton";
import { SubTask } from "../tasks/_index/types";

export const meta: MetaFunction = () => {
  return [
    { title: "LevelUp" },
    {
      name: "description",
      content: "Welcome LevelUP Done your Tasks in the Game",
    },
  ];
};

export default function Index() {
  const [subTasks, setSubTasks] = useState<SubTask[]>([] as SubTask[]);

  return (
    <Form className="border border-orange-500 rounded-2xl h-full p-9 flex flex-col gap-3">
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        className="border border-orange-500 rounded-2xl outline-none p-3 font-semibold"
      />
      <div className="border border-orange-500 rounded-2xl outline-none resize-none p-3 h-full overflow-scroll">
        <div className="flex items-center gap-1">
          <Plus />
          <input
            name="content"
            placeholder="Add a task"
            className="outline-none resize-none w-full"
            onKeyDown={(e) => {
              if (e.code === "Enter" && e.target.value !== "") {
                setSubTasks((prev) => [
                  ...prev,
                  {
                    id: "1",
                    content: e.target.value,
                    exp: 0,
                    isDone: false,
                  },
                ]);
              }
            }}
          />
        </div>
        <ul className="flex flex-col gap-1">
          {subTasks.map(({ id, content }) => (
            <li key={id} className="flex gap-3">
              <Dot />
              {content}
              {/* <p className="bg-orange-500 pl-2 rounded-2xl w-14 text-start">
                + {exp}
              </p> */}
            </li>
          ))}
        </ul>
      </div>

      <ActionButton title="Save" icon={<Save />} />
    </Form>
  );
}
