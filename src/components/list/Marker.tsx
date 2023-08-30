import Image from "next/image";
import marker from "@/assets/map-marker.webp";

type Props = {
  lat: number;
  lng: number;
  text?: string;
};

const Marker = ({ lat, lng, text }: Props) => {
  return <Image width={40} height={40} src={marker} alt="marker" />;
};

export default Marker;
