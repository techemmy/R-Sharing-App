import { useParams } from "react-router"
import Header from "../components/Header";
import { headerViews } from "../constants";
import { getCourseById } from "../api/courses";
import { useEffect, useState } from "react";

export default function ViewResourcePage() {
  const { resourceId } = useParams();
  const [course, setCourse] = useState([])

  useEffect(() => {
    getCourseById(resourceId).then(course => {
      setCourse(course)
    })
  }, [resourceId])


  const imagesCards = course?.images?.map(image => {
    return (
      <div key={image.id} className="w-[200px] h-auto rounded-lg overflow-hidden shrink-0 relative">
        <img src={image.url} alt="Resource Image 1" className="w-full h-auto object-cover" />
        <button
          type="button"
          className="absolute bottom-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span className="sr-only">Download</span>
        </button>
      </div>
    )
  })

  return (
    <div className="w-full bg-indigo-50">
      <Header view={headerViews.CreateResource} />
      <div className="container mx-auto py-12">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-8 md:p-10">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">{course?.courseName}</h2>
                <p className="text-gray-500">{course?.resourceType}. {course?.resourceYear}.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="resource-type" className="block text-sm font-medium text-gray-700">
                    Resource Type
                  </label>
                  <div className="mt-2">
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span>{course?.resourceType}</span>
                        {/*<span className="text-gray-500">PQ</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="resource-year" className="block text-sm font-medium text-gray-700">
                    Resource Year
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center justify-between">
                      <span>{course?.resourceYear}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="course-name" className="block text-sm font-medium text-gray-700">
                    Course Name
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center justify-between">
                      <span>{course?.courseName}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="course-code" className="block text-sm font-medium text-gray-700">
                    Course Code
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center justify-between">
                      <span>{course?.courseCode}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700">
                  School
                </label>
                <div className="mt-2">
                  <div className="flex items-center justify-between">
                    <span>{course?.school?.name}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg shadow-lg">
                <div className="p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Resource Images</h3>
                      <p className="text-gray-500">View the images uploaded for this resource.</p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-not-allowed"
                      disabled
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download as PDF (Coming Soon)
                    </button>
                  </div>
                  <div className="mt-4 flex gap-4 overflow-x-auto">
                    {course?.images?.length <= 0 ? "No Images" : imagesCards}

                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="text-indigo-600 hover:bg-indigo-100 p-2 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <span className="sr-only">Like</span>
                </button>
                <div className="text-gray-500">{course?.stars?.length} likes</div>
              </div>
              <div className="bg-gray-50 rounded-lg shadow-lg">
                <div className="p-8 md:p-10">
                  <div>
                    <h3 className="text-lg font-medium">Comments</h3>
                    <p className="text-gray-500">Share your thoughts on this resource.</p>
                  </div>
                  <div className="mt-4">
                    <textarea
                      placeholder="Coming soon..."
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                    />
                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-not-allowed"
                      disabled
                    >Coming soon</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
