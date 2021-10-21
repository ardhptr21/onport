const Td = ({ children, field, ...props }) => {
  return (
    <td
      {...props}
      className="w-full overflow-ellipsis lg:w-auto p-3 text-white text-center border border-b block lg:table-cell relative lg:static"
    >
      <span className="lg:hidden absolute top-0 left-0 bg-white text-primary px-2 py-1 text-xs font-bold uppercase">
        {field}
      </span>
      {children}
    </td>
  );
};

export default Td;
