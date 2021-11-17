const Tr = ({ children, ...props }) => {
  return (
    <tr
      {...props}
      className="bg-gray-800 md:hover:bg-primary flex md:table-row flex-row md:flex-row flex-wrap md:flex-no-wrap mb-10 md:mb-0"
    >
      {children}
    </tr>
  );
};

export default Tr;
