"use client";
import Header from "@/components/detail/Header";
import { trpc } from "@/server/rsc/trpc";
import ProjectItem from "@/components/detail/ProjectItem";

type Props = {
  id: string;
};

export default function Farm({ id }: Props) {
  const { data: farm, isLoading } = trpc.farmerProcedeure.getById.useQuery(
    {
      id,
    },
    { enabled: !!id },
  );
  if (isLoading) return <>Loading</>;
  if (!farm) return <>Fail to load farm data</>

  const coordinates = farm?.managementAreasGeoJSON?.[0];
  console.log(farm);

  return (
    <>
      <Header
        name={farm.name}
        address={farm.address}
        email={farm.email}
        phone={farm.phone}
        website={farm.website}
      />
      <div className="mt-6 px-6">
        <h2 className="font-nunito text-2xl font-bold leading-7">
          Project List
        </h2>
        <div className="mt-4 flex flex-col gap-4">
          {farm?.managementAreasGeoJSON?.map((item) => (
            <ProjectItem
              name={item.properties.Area_name ?? item.properties.P_Area ?? ""}
              id={item.properties.projID}
              area={item.properties.Area_ha}
              type={item.geometry.type}
            />
          ))}
        </div>
      </div>
    </>
  );
}
