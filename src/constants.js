export function getResourceFilters(view) {
  switch (view) {
    case USER_RESOURCE_VIEWS.personal:
      return {
        Your: "", // for user own resources on profile page
        "Past Questions": "PQ",
        Notes: "NOTE",
      };

    default:
      return {
        All: "",
        "Past Questions": "PQ",
        Notes: "NOTE",
      };
  }
}

export const USER_RESOURCE_VIEWS = {
  general: "general",
  personal: "personal",
};
