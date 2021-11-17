const Th = ({ children, ...props }) => {
  return (
    <th {...props} className="p-3 font-bold uppercase bg-primary text-white border border-primary hidden md:table-cell">
      {children}
    </th>
  );
};

export default Th;
