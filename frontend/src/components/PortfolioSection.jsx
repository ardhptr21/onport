const PortfolioSection = ({ children, title }) => {
  return (
    <section className="md:p-20 p-10">
      <div className="flex items-center justify-center gap-10 mb-10">
        <h2 className="md:text-5xl text-4xl font-bold min-w-max">{title}</h2>
        <span className="md:inline-block hidden h-1 bg-secondary w-full"></span>
      </div>

      {children}
    </section>
  );
};

export default PortfolioSection;
