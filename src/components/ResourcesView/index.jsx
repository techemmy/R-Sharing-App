import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput"
import { getResourceFilters, USER_RESOURCE_VIEWS } from "@/constants"
import LoadingResourceCards from "@/components/LoadingResourceCards"
import ResourceCards from "@/components/ResourceCards";
import useGetAsync from "@/hooks/useGetAsyncHook";
import { useSearchParams } from "react-router-dom";
import ResourceFilterLinks from "@/components/ResourceFilterLinks";
import CustomPagination from "@/components/CustomPagination";
import useAuth from "@/hooks/useAuth";

/*
 * @param {string}: view - it could be "general" which is default or "personal"
 *                         which is for the profile page
 */
export default function ResourcesView({ view = USER_RESOURCE_VIEWS.general }) {
  const currentResourceFilters = getResourceFilters(view);
  const [filter, setFilter] = useState("");
  const [searchParams, setSearchParams] = useSearchParams()
  const searchTerm = searchParams.get('q') ?? '';
  const currentPage = parseInt(searchParams.get('page') || 1);
  const { user } = useAuth();
  let userId = '';

  if (view === USER_RESOURCE_VIEWS.personal) {
    userId = user._id;
  }

  const { data, isLoading, error } = useGetAsync(
    `/resources?size=8&page=${currentPage}&type=${filter}&q=${searchTerm}&userId=${userId}`
  )
  const resources = data?.data?.data;
  const totalPages = data?.data?.totalPages;

  useEffect(() => {
    if (!isNaN(totalPages) && currentPage > 1 && currentPage > totalPages) {
      setSearchParams({ page: totalPages === 0 ? 1 : totalPages })
    }

    if (currentPage < 0) {
      setSearchParams({ page: 1 })
    }
  }, [totalPages, currentPage])

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

  const handleResourceTypeChange = (resourceType) => {
    setFilter(resourceType)
  }

  const handleSearchSubmit = function(searchWord) {
    if (searchWord === searchTerm) return
    setSearchParams({ q: searchWord })
  }

  const handlePageChange = function(page) {
    if (page < 1
      || page > totalPages
      || page === currentPage) return
    setSearchParams({ page })
  }

  return (
    <div className="flex flex-col pt-4">
      <div className="flex flex-wrap flex-col md:flex-row gap-2 mb-5 md:items-center justify-between h-max">
        <h1 className="text-2xl font-bold">
          {view === USER_RESOURCE_VIEWS.personal ? "Your" : "All"} Resources
        </h1>
        <SearchInput
          urlSearchTerm={searchTerm}
          onSubmit={handleSearchSubmit}
        />
      </div>

      <ResourceFilterLinks resourceFilters={currentResourceFilters} onClick={handleResourceTypeChange} selected={filter} />

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
  );
};
