import type { NextPage } from "next";
import HeaderedPage from "@/components/HeaderedPage";
import type { GraphsType } from "@/types/graphs";

const EXAMPLE_JSON: GraphsType = {
  graphs: [
    {
      label: "Youtuber quotations",
      nodes: [
        {
          id: "0",
          label: "Vsauce",
        },
        {
          id: "1",
          label: "Kurzgesagt - In a Nutshell",
        },
      ],
      edges: [
        { source: "0", target: "1", metadata: { factor: 2 } },
        { source: "1", target: "0", metadata: { factor: 17 } },
      ],
    },
  ],
};

const AboutPage: NextPage = () => {
  return (
    <HeaderedPage>
      <h1 className="h2">Graph Coordinate System</h1>

      <p>
        This web app displays different simulations for a graph-theory data
        structure provided in a JSON file. An example for data format can be
        seen here:
      </p>

      <pre>{JSON.stringify(EXAMPLE_JSON, null, 2)}</pre>
    </HeaderedPage>
  );
};

export default AboutPage;
