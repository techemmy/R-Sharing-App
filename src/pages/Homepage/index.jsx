import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Header from "@/components/Header"
import SearchInput from "@/components/SearchInput"
import { RESOURCE_TYPE } from "@/constants"
import LoadingResourceCards from "@/components/LoadingResourceCards"
import ResourceCards from "@/components/ResourceCards";
import useGetAsync from "@/hooks/useGetAsyncHook";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  const [filter, setFilter] = useState(RESOURCE_TYPE.All);
  const [searchParams, setSearchParams] = useSearchParams()
  const searchTerm = searchParams.get('q') ?? '';

  const { data, isLoading, error } = useGetAsync(
    `/resources?size=100&type=${filter}&q=${searchTerm}`
  )
  const resources = data?.data?.data;

  const handleResourceTypeChange = (resourceType) => {
    setFilter(resourceType)
  }

  const handleSearchSubmit = function(searchWord) {
    if (searchWord === searchTerm) return
    setSearchParams({ q: searchWord })
  }

  let response;
  if (isLoading) {
    response = <LoadingResourceCards />
  } else if (resources) {
    response = resources?.length > 0 ? <ResourceCards resources={resources} /> : <p className="font-medium mt-5">No resources found</p>;
  } else if (error) {
    response = <p>Something went wrong {error?.response?.data?.message}</p>
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 px-4 mb-4 md:px-6 md:mb-6">
        <Sidebar handleFilterChange={handleResourceTypeChange} />

        <div className="flex flex-col pt-4">
          <div className="flex flex-wrap gap-2 mb-5 items-center justify-between h-max">
            <h1 className="text-2xl font-bold">{filter || 'All'} Resources</h1>
            <SearchInput
              urlSearchTerm={searchTerm}
              onSubmit={handleSearchSubmit}
            />
          </div>
          {searchTerm && <h2>Search results for "{searchTerm}"</h2>}
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {response}
          </div>
        </div>
      </div>
    </>
  );
};
