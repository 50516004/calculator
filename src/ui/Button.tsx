import { ReactNode } from "react";

export default function Button(
  {
    children,
    onClick: handler,
  }: {
    children: ReactNode;
    onClick: () => void;
  }
) {
  return (
    <button
      onClick={handler}
      className="
      flex h-14 w-10 items-center justify-center 
      rounded-lg bg-blue-400 text-white
    hover:bg-orange-400 duration-150 flex-1"
    >
      {children}
    </button>
  );
}