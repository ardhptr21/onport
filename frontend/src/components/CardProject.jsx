const CardProject = ({ title, description, url }) => {
  return (
    <div
      className="flex
                flex-col
                justify-center
                p-6
                border-2
                border-primary"
    >
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="my-6 text-secondary">{description}</p>
      <a href={url} className="group w-max cursor-pointer hover:underline">
        Let's see{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline duration-200 transform group-hover:translate-x-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default CardProject;
