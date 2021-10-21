const DashboardTitle = ({ text, children }) => {
  return (
    <h1 className="text-primary text-6xl font-bold flex justify-center items-center gap-2 mb-8">Skills {children}</h1>
  );
};

export default DashboardTitle;
