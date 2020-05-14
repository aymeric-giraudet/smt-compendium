export interface DemonEntryProps {
  race: string;
  name: string;
  level: number;
}

const DemonEntry: React.FC<DemonEntryProps> = props => (
  <tr>
    <td className="border px-4 py-2">{props.race}</td>
    <td className="border px-4 py-2">{props.name}</td>
    <td className="border px-4 py-2">{props.level}</td>
  </tr>
);

export default DemonEntry;
