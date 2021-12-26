import type { NextPage } from "next";
import dynamic from "next/dynamic";
import PageTemplate from "@/components/PageTemplate";
import NonNullGraphsContextElement from "@/components/NonNullGraphsContextElement";
const Graph2DCanvas = dynamic(() => import("@/components/Graph2DCanvas"), {
  ssr: false,
});

const Graph2DPage: NextPage = () => {
  return (
    <PageTemplate>
      <NonNullGraphsContextElement
        contextElement={(context) => <Graph2DCanvas context={context} />}
      />
    </PageTemplate>
  );
};

export default Graph2DPage;
