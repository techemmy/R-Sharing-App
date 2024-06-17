import ResourceCards from "../components/resourceCards";
import SchoolBlock from "../components/schoolBlock";
import Sidebar from "../components/sidebar";
import LeaderBoard from "../components/leaderBoard";
import jsonData from "../apiResources/dummy-1.json";
import { useEffect, useState } from "react";
import api from "../api/"

export const RESOURCE_TYPE = {
  All: '',
  PastQuestion: 'PQ',
  Note: 'NOTE',
}

const possibleStatus = {
  idle: 'idle',
  pending: 'pending',
  resolved: 'resolved',
  rejected: 'rejected',
}


export const RESOURCES_FILTER = {
  all: (resources) => resources,
  notes: (resources) => resources.filter(resource => resource.resourceType.toLowerCase() === RESOURCE_TYPE.Note),
  pq: (resources) => resources.filter(resource => resource.resourceType?.toLowerCase() === RESOURCE_TYPE.PastQuestion),
}

const HomePage = () => {
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
        alert(resp.response.data.message)
      }
    }).catch(error => {
      console.log(error);
      setStatus(possibleStatus.rejected)
    })
  }, [filter])

  const handleChangeResourceType = (resourceType) => {
    setFilter(resourceType)
  }

  return (
    <>
      <div className="flex justify-between">
        <Sidebar handleChangeResourceType={handleChangeResourceType} />
        <div className="pt-2  gap-2 flex basis-full px-30 flex-col">
          <SchoolBlock />
          {status === possibleStatus.pending ? 'Loading' : <ResourceCards resources={resources} />}

        </div>

        <LeaderBoard layout={"right"} />
      </div>
    </>
  );
};

export default HomePage;
