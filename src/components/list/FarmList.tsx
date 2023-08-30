import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function FarmList({ children }: Props) {
  return (
    <div className="flex flex-col gap-5 p-9">
      <h2 className="font-nunito text-2xl font-bold leading-7">Farm List</h2>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
