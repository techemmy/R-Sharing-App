import { redirect } from "react-router-dom";
import api from "../api";

export async function schoolsLoader() {
  try {
    const resp = await api.get("/schools");
    return { schools: resp.data.data };
  } catch (error) {
    alert(`An error occured: ${error.message}`);
    return redirect("/home");
  }
}
