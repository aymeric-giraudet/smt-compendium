import DemonEntry, { DemonEntryProps } from "./DemonEntry";

interface DemonListProps {
  demons: DemonEntryProps[];
}

const DemonList: React.FC<DemonListProps> = (props) => (
  <table className="table-fixed w-full">
    <thead>
      <tr>
        <th className="cell w-1/4">Level</th>
        <th className="cell w-1/4">Race</th>
        <th className="cell w-1/4">Name</th>
        <th className="cell cell-sm  w-1/12">HP</th>
        <th className="cell cell-sm  w-1/12">MP</th>
        <th className="cell cell-sm  w-1/12">St</th>
        <th className="cell cell-sm  w-1/12">In</th>
        <th className="cell cell-sm  w-1/12">Ma</th>
        <th className="cell cell-sm  w-1/12">Vi</th>
        <th className="cell cell-sm  w-1/12">Ag</th>
        <th className="cell cell-sm  w-1/12">Lu</th>
      </tr>
    </thead>
    <tbody>
      {props.demons.map((demon) => (
        <DemonEntry key={demon.name} {...demon} />
      ))}
    </tbody>
  </table>
);

export default DemonList;
