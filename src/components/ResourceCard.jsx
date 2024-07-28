export default function ResourceCard({ resource }) {
  return (
    <div
      key={resource._id}
      className="bg-white rounded-lg shadow-sm flex items-start gap-4 p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <img src={resource.images[0] ? resource.images[0]?.url : "/Folder.png"} alt={resource.courseName} className="rounded-lg w-20 h-20 object-cover" />
      <div className="flex-1 space-y-2 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{resource.courseName}</h3>
            <p className="text-sm font-medium text-indigo-500">{resource.courseCode}</p>
            <p className="text-sm text-gray-500">Slides: {resource.images.length}</p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={resource.stars.length > 0 ? "w-5 h-5 fill-primary" : "w-5 h-5"}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">{resource.stars.length}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <UserIcon className="w-4 h-4 text-indigo-500" />
          <span>{resource.creator.username}</span>
          <span>·</span>
          <span className="bg-gray-100 text-gray-400 font-medium py-1 px-2 rounded-full">{resource.resourceType}</span>
          <span>·</span>
          <span>{resource.school.acronym}</span>
        </div>
      </div>
    </div >
  );
};

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
