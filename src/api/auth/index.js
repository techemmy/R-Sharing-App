import api from "..";

export async function logIn(userData) {
  try {
    const response = await api.post("/auth/login", userData);
    return response;
  } catch (error) {
    console.log("err", error?.response?.data?.message);
    return Promise.reject(error);
  }
}

export async function register(userData) {
  try {
    const response = await api.post("/auth/register", userData);
    if ([200, 201].includes(response.status)) {
      return response;
    }
    throw new Error("Error registering");
  } catch (error) {
    console.log("err", error?.response?.data?.message);
    return Promise.reject(error);
  }
}
