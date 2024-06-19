import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../api/"
import Header from "../components/Header"
import SearchInput from "../components/SearchInput"
import { RESOURCE_TYPE } from "../constants"
import LoadingResourceCards from "../components/LoadingResourceCards"
import ResourceCards from "../components/ResourceCards";

const possibleStatus = {
  idle: 'idle',
  pending: 'pending',
  resolved: 'resolved',
  rejected: 'rejected',
}

export default function HomePage() {
  const [status, setStatus] = useState(possibleStatus.idle)
  const [filter, setFilter] = useState(RESOURCE_TYPE.All);
  const [resources, setResources] = useState([])

  useEffect(() => {
    setStatus(possibleStatus.pending);
    api.get('/resources?size=100', {
      params: { type: filter }
    }
    ).then(resp => {
      if (resp.status === 200) {
        console.log(200, resp.data)
        setStatus(possibleStatus.resolved)
        setResources(resp.data.data)
      } else {
        throw new Error(resp?.response?.data?.message)
      }
    }).catch(error => {
      setStatus(possibleStatus.rejected)
    })
  }, [filter])

  const handleResourceTypeChange = (resourceType) => {
    setFilter(resourceType)
  }

  let response;
  switch (status) {
    case possibleStatus.idle:
      response = <LoadingResourceCards />
      break;
    case possibleStatus.pending:
      response = <LoadingResourceCards />;
      break
    case possibleStatus.resolved:
      response = resources?.length > 0 ? <ResourceCards resources={resources} /> : <p>{resources.length} resources found</p>;
      break
    case possibleStatus.rejected:
      response = <p>Something went wrong</p>
      break
    default:
      response = <p>Check your internet connection and refresh.\n You're disconnected from the server</p>
      break;
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 p-4 md:p-6">
        <Sidebar handleFilterChange={handleResourceTypeChange} />

        <div className="grid">
          <div className="flex flex-wrap gap-2 items-center justify-between h-max">
            <h1 className="text-2xl font-bold">{filter || 'All'} Resources</h1>
            <SearchInput />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {response}
          </div>
        </div>
      </div>
    </>
  );
};
