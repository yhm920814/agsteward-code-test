import { env } from "@/env.mjs";
import axios from "axios";

type ManagementAreasGeoJSON = {
  geometry: { type: string; coordinates: number[][] };
  properties: {
    projID: string;
    P_Area?: string;
    Area_name?: string;
    Area_ha: number;
  };
  type: string;
};

type Farm = {
  address: string;
  email: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  phone: string;
  website: string;
  managementAreasGeoJSON: ManagementAreasGeoJSON[];
};

export const getAll = async () => {
  const res = await axios.get(env.API_ENDPOINT).then(function (response: {
    data: Farm[];
  }) {
    return response.data.map((farm: Farm) => {
      return {
        ...farm,
        managementAreasGeoJSON: JSON.parse(
          farm.managementAreasGeoJSON as unknown as string,
        ) as ManagementAreasGeoJSON[],
      };
    });
  });
  return res;
};

export const getById = async (id: string) => {
  const res = await axios.get(env.API_ENDPOINT).then(function (response: {
    data: Farm[];
  }) {
    const result = response.data
      .filter((item: Farm) => item.id == id)
      .map((farm: Farm) => {
        return {
          ...farm,
          managementAreasGeoJSON: JSON.parse(
            farm.managementAreasGeoJSON as unknown as string,
          ) as ManagementAreasGeoJSON[],
        };
      });
    return result?.[0];
  });
  return res;
};
