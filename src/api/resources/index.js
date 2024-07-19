import api from "..";

const RESOURCES_PATH = "/resources";

export const getResourceById = async function (resourceId) {
  try {
    const response = await api.get(`${RESOURCES_PATH}/${resourceId}`);
    return response.data.data;
  } catch (error) {
    console.log("err", error?.response?.data?.message);
    return Promise.reject(error);
  }
};

export const starResourceById = async function (resourceId) {
  try {
    const response = await api.patch(`${RESOURCES_PATH}/star/${resourceId}`);
    return response.data.data;
  } catch (error) {
    console.log("err", error?.response?.data?.message);
    return Promise.reject(error);
  }
};
