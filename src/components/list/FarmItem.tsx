import Link from "next/link";
import { type ReactElement } from "react";
import { FiMail, FiMapPin, FiPhone, FiHome } from "react-icons/fi";

type Props = {
  name: string;
  id: string;
  address: string;
  email: string;
  phone: string;
  website: string;
};

type FarmDetailItemProps = {
  icon: ReactElement;
  content: string;
};

export const FarmDetailItem = ({ icon, content }: FarmDetailItemProps) => {
  return (
    <div className="flex items-center gap-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
      {icon}
      <div className="font-nunito">{content}</div>
    </div>
  );
};

export default function FarmItem({
  name,
  id,
  address,
  email,
  phone,
  website,
}: Props) {
  return (
    <Link href={`/farm/${id}`}>
      <div className="p-l-3 w-max-[426px] flex flex-col justify-center gap-1 rounded-lg border-l-4 border-white bg-white p-4 shadow-sm hover:border-[#0ba244] hover:shadow-md">
        <h3 className="font-nunito text-lg font-medium leading-7 ">{name}</h3>
        <div className="flex flex-wrap gap-x-4">
          <FarmDetailItem icon={<FiMapPin />} content={address} />
          <FarmDetailItem icon={<FiMail />} content={email} />
          <FarmDetailItem icon={<FiPhone />} content={phone} />
          <FarmDetailItem icon={<FiHome />} content={website} />
        </div>
      </div>
    </Link>
  );
}
