import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import Header from "@/components/Header"
import SearchInput from "@/components/SearchInput"
import { RESOURCE_TYPE } from "@/constants"
import LoadingResourceCards from "@/components/LoadingResourceCards"
import ResourceCards from "@/components/ResourceCards";
import useGetAsync from "@/hooks/useGetAsyncHook";
import { useSearchParams } from "react-router-dom";
import ResourceFilterLinks from "@/components/ResourceFilterLinks";
import CustomPagination from "@/components/CustomPagination";

export default function HomePage() {
  const [filter, setFilter] = useState(RESOURCE_TYPE.All);
  const [searchParams, setSearchParams] = useSearchParams()
  const searchTerm = searchParams.get('q') ?? '';
  const currentPage = parseInt(searchParams.get('page') || 1);

  const { data, isLoading, error } = useGetAsync(
    `/resources?size=8&page=${currentPage}&type=${filter}&q=${searchTerm}`
  )
  const resources = data?.data?.data;
  const totalPages = data?.data?.totalPages;

  useEffect(() => {
    if (!isNaN(totalPages) && currentPage > 1 && resources?.length === 0) {
      setSearchParams({ page: 1 })
    }
  }, [totalPages])

  const handleResourceTypeChange = (resourceType) => {
    setFilter(resourceType)
  }

  const handleSearchSubmit = function(searchWord) {
    if (searchWord === searchTerm) return
    setSearchParams({ q: searchWord })
  }

  const handlePageChange = function(page) {
    if (page < 1 || page > totalPages || page === currentPage) return
    setSearchParams({ page })
  }

  let response;
  if (isLoading) {
    response = <LoadingResourceCards />
  } else if (resources) {
    response = resources?.length > 0
      ? <ResourceCards resources={resources} />
      : <p className="font-medium mt-5">No resources found</p>;
  } else if (error) {
    response = <p>Something went wrong {error?.response?.data?.message}</p>
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 max-w-screen-xl mx-auto md:grid-cols-[1fr_240px] gap-6 px-4 mb-4 md:px-6 md:mb-6">
        <div className="flex flex-col pt-4">
          <div className="flex flex-wrap flex-col md:flex-row gap-2 mb-5 md:items-center justify-between h-max">
            <h1 className="text-2xl font-bold">{filter || 'All'} Resources</h1>
            <SearchInput
              urlSearchTerm={searchTerm}
              onSubmit={handleSearchSubmit}
            />
          </div>

          <ResourceFilterLinks onClick={handleResourceTypeChange} selected={filter} />

          <h2>{searchTerm && `Search results for "${searchTerm}"`}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {response}
          </div>

          <CustomPagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>

        <Sidebar />
      </div >
    </>
  );
};
