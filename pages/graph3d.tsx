import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import PageTemplate from "@/components/PageTemplate";
import NonNullGraphsContextElement from "@/components/NonNullGraphsContextElement";
const Graph3DCanvas = dynamic(() => import("@/components/Graph3DCanvas"), {
  ssr: false,
});

const Graph3DPage: NextPage = () => {
  return (
    <PageTemplate>
      <NonNullGraphsContextElement
        contextElement={(context) => <Graph3DCanvas context={context} />}
      />
    </PageTemplate>
  );
};

export default Graph3DPage;
