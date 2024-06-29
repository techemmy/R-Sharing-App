import { redirect } from "react-router-dom";
import api from "../api";

export async function createResoureceLoader() {
  try {
    const data = await api.get("/schools");
    return { data };
  } catch (error) {
    alert(`An error occured: ${error.message}`);
    return redirect("/home");
  }
}
