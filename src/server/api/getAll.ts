import { env } from "@/env.mjs";
import axios from "axios";

export const getAll = async () => {
  const res = await axios.get(env.API_ENDPOINT).then(function (response) {
    return response.data.map((farm) => {
      return {
        ...farm,
        managementAreasGeoJSON: JSON.parse(farm.managementAreasGeoJSON),
      };
    });
  });
  return res;
};

export const getById = async (id: string) => {
  const res = await axios.get(env.API_ENDPOINT).then(function (response) {
    const result = response.data
      .filter((item) => item.id == id)
      .map((farm) => {
        return {
          ...farm,
          managementAreasGeoJSON: JSON.parse(farm.managementAreasGeoJSON),
        };
      });
    return result?.[0];
  });
  return res;
};
