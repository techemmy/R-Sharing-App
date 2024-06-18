import { Form, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import { headerViews } from "../constants";
import { useAuth } from "../provider/authProvider";

export default function CreateResourcePage() {
  const { data: { data: { data: schools } } } = useLoaderData();
  const { user: { _id: creator } } = useAuth();
  return (
    <div className="w-full bg-indigo-50">
      <Header view={headerViews.CreateResource} />
      <div className="container mx-auto py-12">
        <Form method="post" encType="multipart/form-data" className="bg-white rounded-lg shadow-lg">
          <input value={creator} name='creator' className="hidden" readOnly />
          <div className="p-8 md:p-10">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Create New Resource</h2>
                <p className="text-gray-500">Select the type of resource you want to create.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="resource-type" className="block text-sm font-medium text-gray-700 ">
                    Resource Type
                  </label>
                  <div className="mt-2">
                    <div className="relative">
                      <select
                        id="resource-type"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                        name="resourceType"
                      >
                        <option>Select type</option>
                        <option value="PQ">Past Question (PQ)</option>
                        <option value="NOTE">Note</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="resource-year" className="block text-sm font-medium text-gray-700">
                    Resource Year
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="resource-year"
                      placeholder="Enter year"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                      name="resourceYear"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="course-name" className="block text-sm font-medium text-gray-700 ">
                    Course Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="course-name"
                      placeholder="Enter course name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                      name="courseName"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="course-code" className="block text-sm font-medium text-gray-700 ">
                    Course Code
                  </label>
                  <div className="mt-2">
                    <input
                      id="course-code"
                      placeholder="Enter course code"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                      name="courseCode"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 ">
                  School
                </label>
                <div className="mt-2">
                  <div className="relative">
                    <select
                      id="school"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                      name="school"
                    >
                      <option>Select school</option>
                      {schools.map(school => {
                        return <option key={`${school._id}`} value={school._id}>{school.name}</option>
                      })}

                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-lg">
                <div className="p-8 md:p-10">
                  <div>
                    <h3 className="text-lg font-medium">Resource Image</h3>
                    <p className="text-gray-500 ">
                      You can upload images for your resource. Supported file types are JPG, PNG, and GIF.
                    </p>
                  </div>
                  <div className="mt-4">
                    <input
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
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Resource
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}
