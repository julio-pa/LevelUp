import { LayoutList, Plus } from "lucide-react";
import ActionButton from "./ActionButton";

export default function SideBar() {
  return (
    <div className="sticky top-0 w-[30%] py-3 px-6 border-r border-orange-500 flex flex-col gap-3">
      <div className="flex items-center text-2xl text-orange-500 font-semibold  justify-center">
        <img src="/LevelUpLogo.png" alt="logo" className="w-20 h-20" />{" "}
        <h1>LevelUp</h1>
      </div>
      <ActionButton title="New" icon={<Plus />} />
      <h1 className="text-2xl flex items-center gap-3 font-semibold">
        <LayoutList /> Your Tasks
      </h1>
    </div>
  );
}
