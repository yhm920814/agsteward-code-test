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
  managementAreasGeoJSON: string;
};

export const getAll = async () => {
  const res: Promise<Farm[]> = await axios
    .get(env.API_ENDPOINT)
    .then(function (response) {
      return response.data.map((farm: Farm) => {
        return {
          ...farm,
          managementAreasGeoJSON: JSON.parse(farm.managementAreasGeoJSON),
        };
      });
    });
  return res;
};

export const getById = async (id: string) => {
  const res: Promise<Farm[]> = await axios
    .get(env.API_ENDPOINT)
    .then(function (response) {
      const result = response.data
        .filter((item: Farm) => item.id == id)
        .map((farm: Farm) => {
          return {
            ...farm,
            managementAreasGeoJSON: JSON.parse(
              farm.managementAreasGeoJSON,
            ) as ManagementAreasGeoJSON,
          };
        });
      return result?.[0];
    });
  return res;
};
