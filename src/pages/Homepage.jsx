import ResourceCards from "../components/ResourceCards";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../api/"
import Header from "../components/Header"
import SearchInput from "../components/SearchInput"
import { RESOURCE_TYPE } from "../constants"

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
    api.get('/resources', {
      params: { type: filter }
    }
    ).then(resp => {
      if (resp.status === 200) {
        setResources(resp.data.data)
        setStatus(possibleStatus.resolved)
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
  const Loader = (<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)

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
            {status === possibleStatus.rejected ? "Check your internet connection and refresh.\n You're disconnected from the server" : ''}
            {status === possibleStatus.pending ? Loader : <ResourceCards resources={resources} />}
          </div>
        </div>
      </div>
    </>
  );
};
