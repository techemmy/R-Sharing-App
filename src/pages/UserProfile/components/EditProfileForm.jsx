import InputWithLabel from "@/components/InputWithLabel";
import SelectWithLabel from "@/components/SelectWithLabel";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import updateUserProfileById from "@/api/users";
import { useToast } from "@/components/ui/use-toast";
import * as Yup from "yup";

const editFormValidationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .required()
    .min(3, "Must be 3 characters or more"),
  username: Yup.string()
    .trim()
    .lowercase()
    .required()
    .min(5, "Must be 5 characters or more"),
  school: Yup.string().required(),
  department: Yup.string().trim(),
  country: Yup.string(),
});

export default function EditProfileForm({ user, updateToken, schools }) {
  const [editProfileOn, setEditProfileOn] = useState(false);
  const { toast } = useToast();
  const initialValues = {
    fullname: user?.fullname || "",
    username: user?.username || "",
    school: user?.school || "",
    department: user?.department || "",
    country: "Nigeria",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: editFormValidationSchema,
  });
  const formRef = useRef();

  useEffect(() => {
    if (editProfileOn) {
      formRef.current[0].focus();
    }
  }, [editProfileOn]);

  async function handleFormSubmit(values, { setSubmitting }) {
    try {
      if (JSON.stringify(initialValues) === JSON.stringify(values)) {
        setSubmitting(false);
        setEditProfileOn(false);
        return;
      }
      const data = await updateUserProfileById(user._id, values);
      updateToken(data.updated_token);
      setEditProfileOn(false);

      toast({
        className: "bg-green-500 text-white",
        title: "Successful",
        description: data?.message,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Profile update failed 😬",
        description: Array.isArray(error?.response?.data?.message)
          ? error?.response?.data?.message.join(", ")
          : error?.response?.data?.message ||
            error.message ||
            "Something unexpected happened",
      });
    }

    setSubmitting(false);
  }
  return (
    <form ref={formRef} onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputWithLabel
          label="Full name"
          name="fullname"
          placeholder="Enter your full name"
          type="text"
          readOnly={!editProfileOn}
          error={
            editProfileOn && formik.touched.fullname && formik.errors.fullname
          }
          required
          {...formik.getFieldProps("fullname")}
        />
        <InputWithLabel
          label="Username"
          name="username"
          placeholder="Enter your username"
          type="text"
          readOnly={!editProfileOn}
          error={
            editProfileOn && formik.touched.username && formik.errors.username
          }
          required
          {...formik.getFieldProps("username")}
        />
        <SelectWithLabel
          name="school"
          label="University/Institution"
          options={schools.map((school) => ({
            value: school._id,
            name: `${school.name}, ${school.acronym}`,
          }))}
          error={editProfileOn && formik.touched.school && formik.errors.school}
          required
          disabled={!editProfileOn}
          {...formik.getFieldProps("school")}
        />

        <InputWithLabel
          name="department"
          label="Department/Major/Field of Study"
          placeholder="Enter your department"
          type="text"
          error={
            editProfileOn &&
            formik.touched.department &&
            formik.errors.department
          }
          readOnly={!editProfileOn}
          {...formik.getFieldProps("department")}
        />

        <SelectWithLabel
          name="country"
          label="Country"
          options={[{ value: "Nigeria", name: "Nigeria" }]}
          type="text"
          {...formik.getFieldProps("country")}
          error={
            editProfileOn && formik.touched.country && formik.errors.country
          }
          required
          disabled
        />
      </div>
      <div className="mt-2">
        {editProfileOn ? (
          <Button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4 sm:mt-0"
            isLoading={formik.isSubmitting}
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Save
          </Button>
        ) : (
          <Button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4 sm:mt-0"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setEditProfileOn(true);
            }}
          >
            Edit profile
          </Button>
        )}
      </div>
    </form>
  );
}
