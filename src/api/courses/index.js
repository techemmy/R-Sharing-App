import api from "..";

export const getCourseById = async function (courseId) {
  try {
    const response = await api.get(`/resources/${courseId}`);
    return response.data.data;
  } catch (error) {
    console.log("err", error?.response?.data?.message);
    return Promise.reject(error);
  }
};
