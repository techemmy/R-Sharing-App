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

export const sampleResources = [
  {
    id: 1,
    courseName: "Introduction to Computer Science",
    code: "CS101",
    creator: { username: "John Doe" },
    type: "PQ",
    stars: [],
    school: { acronym: "University of Technology" },
    images: [{ url: "/placeholder.svg" }],
  },
  {
    id: 2,
    courseName: "Data Structures and Algorithms",
    code: "CS201",
    creator: { username: "Jane Smith" },
    type: "NOTE",
    stars: [],
    school: { acronym: "University of Technology" },
    images: [],
  },
  {
    id: 3,
    courseName: "Introduction to Web Development",
    code: "CS150",
    creator: { username: "Bob Johnson" },
    type: "PQ",
    stars: [],
    school: { acronym: "University of Technology" },
    images: [],
  },
  {
    id: 4,
    courseName: "Machine Learning Fundamentals",
    code: "CS301",
    creator: { username: "Mike Brown" },
    type: "NOTE",
    stars: [],
    school: "University of Technology",
    images: [],
  },
  {
    id: 5,
    courseName: "Database Systems",
    code: "CS230",
    creator: { username: "Mike Brown" },
    type: "PQ",
    stars: [],
    school: { acronym: "University of Technology" },
    images: [{ url: "/placeholder.svg" }],
  },
  {
    id: 6,
    courseName: "Principles of Software Engineering",
    code: "CS340",
    creator: { username: "Emily Chen" },
    type: "NOTE",
    school: { acronym: "University of Technology" },
    images: [],
    stars: [],
  },
];
