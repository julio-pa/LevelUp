import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Save } from "lucide-react";
import ActionButton from "~/components/ActionButton";

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
  return (
    <Form className="border border-orange-500 rounded-2xl h-full p-9 flex flex-col gap-3">
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        className="border border-orange-500 rounded-2xl outline-none p-3"
      />

      <textarea
        name="content"
        placeholder="Write smt"
        className="border border-orange-500 rounded-2xl outline-none resize-none p-3 h-full"
      />
      <ActionButton title="Save" icon={<Save />} />
    </Form>
  );
}
