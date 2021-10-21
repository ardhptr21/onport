import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";
import Td from "./Td";
import Tr from "./Tr";

const RowTableProject = ({ no, title, description, url, projectId }) => {
  return (
    <Tr>
      <Td field="No">{no}</Td>
      <Td field="Title">{title}</Td>
      <Td field="Description">{description}</Td>
      <Td field="URL">
        <a href={url} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-400">
          {url}
        </a>
      </Td>
      <Td field="Actions">
        <div className="flex justify-center lg:flex-col items-center gap-3">
          <ButtonEdit data-id={projectId} />
          <ButtonDelete data-id={projectId} />
        </div>
      </Td>
    </Tr>
  );
};

export default RowTableProject;
