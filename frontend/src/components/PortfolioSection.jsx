const PortfolioSection = ({ children, title }) => {
  return (
    <section className="p-20">
      <div className="flex items-center  justify-center gap-10 mb-10">
        <h2 className="text-5xl font-bold min-w-max">{title}</h2>
        <span className="inline-block h-1 bg-secondary w-full"></span>
      </div>

      {children}
    </section>
  );
};

export default PortfolioSection;
