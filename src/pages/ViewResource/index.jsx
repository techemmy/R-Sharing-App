import { useParams } from "react-router"
import Header from "@/components/Header";
import { HEADER_VIEWS } from "@/constants";
import { getResourceById } from "@/api/resources";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ResourceImageCard from "@/components/ResourceImageCard";
import { useFetcher } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

export default function ViewResourcePage() {
  const { resourceId } = useParams();
  const [resource, setResource] = useState([])
  const fetcher = useFetcher();
  const { user } = useAuth()
  const resourceIsStared = resource?.stars?.includes(user._id);

  useEffect(() => {
    setResource(fetcher.data);
  }, [fetcher])

  useEffect(() => {
    getResourceById(resourceId).then(resource => {
      setResource(resource)
    })
  }, [resourceId])


  const resourceImages = resource?.images?.map(image => {
    return <ResourceImageCard key={image.pageNo} image={image} resourceInfo={`${resource.courseName}-${resource.resourceType}`} />
  })

  return (
    <div className="w-full bg-indigo-50">
      <Header view={HEADER_VIEWS.CreateResource} />
      <div className="container mx-auto py-12">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-8 md:p-10">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">{resource?.courseName}</h2>
                <p className="text-gray-500">{resource?.resourceType}. {resource?.resourceYear}.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="resource-type" className="block text-sm font-medium text-gray-700">
                    Resource Type
                  </label>
                  <div className="mt-2">
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span>{resource?.resourceType}</span>
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
                      <span>{resource?.resourceYear}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="resource-name" className="block text-sm font-medium text-gray-700">
                    resource Name
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center justify-between">
                      <span>{resource?.courseName}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="resource-code" className="block text-sm font-medium text-gray-700">
                    resource Code
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center justify-between">
                      <span>{resource?.courseCode}</span>
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
                    <span>{resource?.school?.name}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg shadow-lg">
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Resource Images</h3>
                      <p className="text-gray-500">View the images uploaded for this resource.</p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center mt-2 md:mt-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-not-allowed"
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
                  <div className="mt-4">
                    {resource?.images?.length <= 0
                      ? "No Images"
                      :
                      <Carousel className="w-full">
                        <CarouselContent>
                          {resourceImages}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    }
                  </div>
                </div>
              </div>
              <fetcher.Form method="PATCH" className="flex items-center justify-between">
                <button
                  type="submit"
                  className={`active:scale-125 transition-transform text-indigo-600 hover:bg-indigo-100 p-2 rounded-full ${resourceIsStared && "animate-pulse"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${resourceIsStared && "fill-indigo-600"}`}
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
                <div className="text-gray-500">{resource?.stars?.length} likes</div>
              </fetcher.Form>
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
