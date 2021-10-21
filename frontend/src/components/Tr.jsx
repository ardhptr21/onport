const Tr = ({ children, ...props }) => {
  return (
    <tr
      {...props}
      className="bg-gray-800 lg:hover:bg-primary flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
    >
      {children}
    </tr>
  );
};

export default Tr;
