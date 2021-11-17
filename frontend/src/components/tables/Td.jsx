const Td = ({ children, field, ...props }) => {
  return (
    <td
      {...props}
      className="w-full overflow-ellipsis md:w-auto p-3 text-white text-center border border-b block md:table-cell relative md:static"
    >
      <span className="md:hidden absolute top-0 left-0 bg-white text-primary px-2 py-1 text-xs font-bold uppercase">
        {field}
      </span>
      <div className="mt-5">{children}</div>
    </td>
  );
};

export default Td;
