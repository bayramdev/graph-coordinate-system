import HeaderedPage from "@/components/HeaderedPage";
import NonNullGraphsContextElement from "@/components/NonNullGraphsContextElement";
import Graph2DCanvas from "@/components/Graph2DCanvas";
import type { NextPage } from "next";

const Graph2DPage: NextPage = () => {
  return (
    <HeaderedPage>
      <NonNullGraphsContextElement
        contextElement={(context) => <Graph2DCanvas context={context} />}
      />
    </HeaderedPage>
  );
};

export default Graph2DPage;
