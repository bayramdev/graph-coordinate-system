import type { NextPage } from "next";
import dynamic from "next/dynamic";
import HeaderedPage from "@/components/HeaderedPage";
import NonNullGraphsContextElement from "@/components/NonNullGraphsContextElement";
const Graph2DCanvas = dynamic(() => import("@/components/Graph2DCanvas"), {
  ssr: false,
});

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
