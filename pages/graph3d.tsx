import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import HeaderedPage from "@/components/HeaderedPage";
import NonNullGraphsContextElement from "@/components/NonNullGraphsContextElement";
const Graph3DCanvas = dynamic(() => import("@/components/Graph3DCanvas"), {
  ssr: false,
});

const Graph3DPage: NextPage = () => {
  return (
    <HeaderedPage>
      <NonNullGraphsContextElement
        contextElement={(context) => <Graph3DCanvas context={context} />}
      />
    </HeaderedPage>
  );
};

export default Graph3DPage;
