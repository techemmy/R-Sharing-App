import api from "..";

const USERS_PATH = "/users";

export default async function updateUserProfileById(userId, data) {
  try {
    const resp = await api.patch(`${USERS_PATH}/${userId}`, data);
    return resp.data;
  } catch (error) {
    console.log("err", error?.response?.data?.message || error?.message);
    return Promise.reject(error);
  }
}
