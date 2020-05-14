import { GetStaticProps } from "next";
import { DemonEntryProps } from "../components/DemonEntry";
import demonData from "../data/smt2.json";
import DemonList from "../components/DemonList";

interface IndexProps {
  demons: DemonEntryProps[];
}

const IndexPage: React.FC<IndexProps> = props => (
  <div className="px-4 lg:px-40">
    <div className="bg-gray-700 rounded my-6 p-6 lg:my-12">
      <DemonList {...props} />
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const demons: DemonEntryProps[] = Object.keys(demonData).map((key) => ({
    name: key,
    //@ts-ignore
    race: demonData[key].race,
    //@ts-ignore
    level: demonData[key].lvl
  }));
  return { props: { demons } };
};

export default IndexPage;
