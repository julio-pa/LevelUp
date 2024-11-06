type Props = {
  icon: React.ReactNode;
  title: string;
};
export default function ActionButton({ icon, title }: Props) {
  return (
    <button className="bg-orange-500 rounded-2xl p-3 flex items-center justify-center text-xl font-semibold gap-1 w-full">
      {icon}
      {title}
    </button>
  );
}
