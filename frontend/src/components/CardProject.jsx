const CardProject = ({ title, description, url }) => {
  return (
    <div
      className="flex
                flex-col
                justify-center
                p-6
                group
                bg-primary
                hover:bg-transparent
                hover:border-2
                hover:border-primary
                duration-200 select-none"
    >
      <h3 className="md:text-3xl text-2xl text-white group-hover:text-primary font-bold">{title}</h3>
      <p className="my-6 text-secondary">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="group w-max cursor-pointer text-white group-hover:text-primary hover:underline"
      >
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
