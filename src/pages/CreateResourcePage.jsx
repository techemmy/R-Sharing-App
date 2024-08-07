import { Form, useLoaderData, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import { HEADER_VIEWS } from "../constants";
import useAuth from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import SelectWithLabel from "@/components/SelectWithLabel";
import InputWithLabel from "@/components/InputWithLabel";

export default function CreateResourcePage() {
  const { schools } = useLoaderData();
  const schoolOptions = schools.map((school) => ({
    name: `${school.name}, ${school.acronym}`,
    value: school._id,
  }));
  const {
    user: { _id: creator },
  } = useAuth();
  const navigation = useNavigation();
  return (
    <div className="w-full bg-indigo-50">
      <Header view={HEADER_VIEWS.CreateResource} />
      <div className="container mx-auto py-12">
        <Form
          method="post"
          encType="multipart/form-data"
          className="bg-white rounded-lg shadow-lg"
        >
          <input value={creator} name="creator" className="hidden" readOnly />
          <div className="p-8 md:p-10">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Create New Resource</h2>
                <p className="text-gray-500">
                  Select the type of resource you want to create.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <SelectWithLabel
                  label="Resource Type"
                  name="resourceType"
                  options={[
                    { value: "PQ", name: "Past Question (PQ)" },
                    { value: "NOTE", name: "Notes" },
                  ]}
                  required
                />

                <InputWithLabel
                  label="Resource Year"
                  name="resourceYear"
                  placeholder="Enter year"
                  type="number"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <InputWithLabel
                  label="Course Name"
                  name="courseName"
                  placeholder="Enter course name"
                  type="text"
                  required
                />

                <InputWithLabel
                  label="Course Code"
                  name="courseCode"
                  placeholder="Enter course code"
                  type="text"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <SelectWithLabel
                  label="School"
                  name="school"
                  options={schoolOptions}
                  required
                />
              </div>

              <div className="bg-gray-50 rounded-lg shadow-lg">
                <div className="p-8 md:p-10">
                  <div>
                    <h3 className="text-lg font-medium">Resource Image</h3>
                    <p className="text-gray-500 ">
                      You can upload images for your resource. Supported file
                      types are JPG, JPEG, and PNG.
                    </p>
                  </div>
                  <div className="mt-4">
                    <input
                      required
                      type="file"
                      id="resource-image"
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      name="images"
                      multiple
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
            <Button
              type="submit"
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${navigation.state === "submitting" ? "cursor-not-allowed" : ""}`}
              disabled={navigation.state === "submitting"}
              isLoading={navigation.state === "submitting"}
            >
              Create Resource
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
