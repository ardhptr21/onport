const FeatureCard = ({ title, description, src, alt, mirror, mb }) => {
  return (
    <div
      className={`flex lg:flex-row flex-col justify-center w-full lg:gap-28 gap-10 ${mb && "mb-40"} ${
        mirror && "lg:flex-row-reverse"
      }`}
    >
      <div>
        <h2 className="lg:text-6xl md:text-5xl text-4xl mb-5 font-encode-sans font-bold">{title}</h2>
        <p className="lg:text-xl md:text-lg text-base">{description}</p>
      </div>
      <img src={src} className="lg:w-1/2 w-full shadow-xl" alt={alt} />
    </div>
  );
};

export default FeatureCard;
