import ResourceCards from "../components/resourceCards";
import SchoolBlock from "../components/schoolBlock";
import Sidebar from "../components/sidebar";
import LeaderBoard from "../components/leaderBoard";
import jsonData from "../apiResources/dummy-1.json";
import { useState } from "react";

const RESOURCE_TYPE = {
  PastQuestion: 'pq',
  Note: 'note',
}

export const RESOURCES_FILTER = {
  all: (resources) => resources,
  notes: (resources) => resources.filter(resource => resource.resourceType.toLowerCase() === RESOURCE_TYPE.Note),
  pq: (resources) => resources.filter(resource => resource.resourceType?.toLowerCase() === RESOURCE_TYPE.PastQuestion),
}

const HomePage = () => {
  const [filter, setFilter] = useState(RESOURCES_FILTER.all.name);
  const resources = RESOURCES_FILTER[filter](jsonData);

  const handleChangeResourceType = (resourceType) => {
    if (!Object.keys(RESOURCES_FILTER).includes(resourceType.toLowerCase())) {
      return
    }
    setFilter(resourceType)
  }

  return (
    <>
      <div className="flex justify-between">
        <Sidebar handleChangeResourceType={handleChangeResourceType} />
        <div className="pt-2  gap-2 flex basis-full px-30 flex-col">
          <SchoolBlock />
          <ResourceCards resources={resources} />
        </div>

        <LeaderBoard layout={"right"} />
      </div>
    </>
  );
};

export default HomePage;
