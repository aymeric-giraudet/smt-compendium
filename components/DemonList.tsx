import DemonEntry, { DemonEntryProps } from "./DemonEntry";

interface DemonListProps {
  demons: DemonEntryProps[];
}

const DemonList: React.FC<DemonListProps> = (props) => (
  <table className="table-auto">
    <thead>
      <tr>
        <th className="px-4 py-2">Race</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Level</th>
      </tr>
    </thead>
    <tbody>
      {props.demons.map((demon) => (
        <DemonEntry {...demon} />
      ))}
    </tbody>
  </table>
);

export default DemonList;
