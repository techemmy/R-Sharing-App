import api from "..";

export const getResourceById = async function (resourceId) {
  try {
    const response = await api.get(`/resources/${resourceId}`);
    return response.data.data;
  } catch (error) {
    console.log("err", error?.response?.data?.message);
    return Promise.reject(error);
  }
};
