"use client";

import FarmList from "@/components/list/FarmList";
import FarmItem from "@/components/list/FarmItem";
import Marker from "@/components/list/Marker";
import Map from "@/components/Map";
import { trpc } from "@/server/rsc/trpc";

export const Home = () => {
  const { data, isLoading } = trpc.farmerProcedeure.getAll.useQuery();
  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div className="flex">
      <div className="flex w-full justify-center lg:w-1/2 xl:w-2/5">
        <FarmList>
          {data?.map((item) => (
            <FarmItem
              key={item.id}
              id={item.id}
              name={item.name}
              address={item.address}
              email={item.email}
              phone={item.phone}
              website={item.website}
            />
          ))}
        </FarmList>
      </div>
      <div className="hidden sm:block lg:w-1/2 xl:w-3/5">
        <Map lat={-33.8674} lng={151.2093}>
          {data?.map((item) => (
            <Marker
              key={`${item.id}_${item?.latitude}`}
              lat={item?.latitude}
              lng={item?.longitude}
            />
          ))}
        </Map>
      </div>
    </div>
  );
};
