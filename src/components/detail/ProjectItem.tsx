import { FaMapMarkedAlt } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";

type Props = {
  id: string;
  name: string;
  area: number;
  type: string;
};

export default function ProjectItem({ name, id, area, type }: Props) {
  return (
    <div className="flex h-40 items-center justify-center gap-20 rounded-lg border-2 border-white bg-white p-5 shadow-sm hover:border-[#09342e] hover:shadow-md">
      <div className="hidden h-[100px] w-[100px] flex-wrap items-center justify-center rounded-lg bg-[#808080] p-2 text-white sm:flex">
        image placeholder
      </div>
      <div className="flex flex-col">
        <h3 className="font-nunito text-lg font-medium leading-7 ">{`Project ${id} - ${name}`}</h3>
        <div className="flex items-center gap-2">
          <BiCategoryAlt />
          <div className="font-nunito">{type}</div>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkedAlt />
          <div className="font-nunito">{`${area} ha`}</div>
        </div>
      </div>
    </div>
  );
}
