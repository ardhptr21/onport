const AlertDanger = ({ children }) => {
  return (
    <div className="text-center">
      <span className="text-8xl font-bold text-red-500 block">!</span>
      <p className="text-xl bg-red-500 p-2 text-gray-200 font-bold">{children}</p>
    </div>
  );
};

export default AlertDanger;
