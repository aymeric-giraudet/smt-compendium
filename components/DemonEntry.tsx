export interface DemonEntryProps {
  race: string;
  name: string;
  level: number;
}

const DemonEntry: React.FC<DemonEntryProps> = (props) => (
  <tr className="odd:bg-gray-800">
    <td className="cell">{props.level}</td>
    <td className="cell">{props.race}</td>
    <td className="cell">{props.name}</td>
    <td className="cell cell-sm">HP</td>
    <td className="cell cell-sm">MP</td>
    <td className="cell cell-sm">St</td>
    <td className="cell cell-sm">In</td>
    <td className="cell cell-sm">Ma</td>
    <td className="cell cell-sm">Vi</td>
    <td className="cell cell-sm">Ag</td>
    <td className="cell cell-sm">Lu</td>
  </tr>
);

export default DemonEntry;
