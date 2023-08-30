import { FiMail, FiMapPin, FiPhone, FiHome } from "react-icons/fi";
import { FarmDetailItem } from "../list/FarmItem";

type Props = {
  name: string;
  address: string;
  email: string;
  phone: string;
  website: string;
};

export default function FarmDetail({
  name,
  address,
  email,
  phone,
  website,
}: Props) {
  return (
    <div className="flex h-[160px] w-full flex-col items-center justify-center gap-4 bg-[#09342e] p-5 text-white">
      <h1 className="font-nunito text-3xl font-bold">{name}</h1>
      <div className="flex flex-wrap gap-x-6">
        <FarmDetailItem icon={<FiMapPin />} content={address} />
        <FarmDetailItem icon={<FiMail />} content={email} />
        <FarmDetailItem icon={<FiPhone />} content={phone} />
        <FarmDetailItem icon={<FiHome />} content={website} />
      </div>
    </div>
  );
}
