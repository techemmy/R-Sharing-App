export const RESOURCE_TYPE = {
  All: "",
  "Past Questions": "PQ",
  Notes: "NOTE",
};

export const RESOURCES_FILTER = {
  all: (resources) => resources,
  notes: (resources) =>
    resources.filter(
      (resource) => resource.resourceType.toLowerCase() === RESOURCE_TYPE.Notes,
    ),
  pq: (resources) =>
    resources.filter(
      (resource) =>
        resource.resourceType?.toLowerCase() ===
        RESOURCE_TYPE["Past Questions"],
    ),
};

export const headerViews = {
  Home: "home",
  CreateResource: "create-resource",
};
