import { redirect } from "react-router-dom";
import api from "../api";
import { starResourceById } from "@/api/resources";
import checkValidImages from "@/utils";

export async function createResourceAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  if (!checkValidImages(formData.getAll("images"))) {
    alert("Invalid image types. Only .jpg, .jpeg, .png images are allowed");
    return null;
  }

  try {
    const createResourceReq = await api.post("/resources", data);

    if (!createResourceReq.status) {
      const errorMessage = createResourceReq.response.data.message;
      alert(errorMessage);
      return null;
    }

    const { data: createdResource } = createResourceReq;
    alert(`${createdResource.message}. Uploading images...`);

    const resourceId = createdResource.data._id;

    const uploadResourceImgReq = await api.post(
      `/resources/upload-images/${resourceId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    if (!uploadResourceImgReq.status) {
      const errorMessage = uploadResourceImgReq.response.data.message;
      console.log("what happened", errorMessage);
      alert(errorMessage);
      return null;
    }

    alert("Image uploaded successfully!");
    return redirect("/home");
  } catch (error) {
    console.log("error", error);
    alert(
      error?.response?.data?.message ||
        error?.message ||
        "Something went wrong.\n\
        Kindly Contact support with the link at the bottom of the page",
    );
    return null;
  }
}

export async function resourceAction({ params }) {
  return await starResourceById(params.resourceId);
}
