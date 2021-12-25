import React from "react";
import type { NextPage } from "next";
import HeaderedPage from "@/components/HeaderedPage";
import NonNullGraphsContextElement from "@/components/NonNullGraphsContextElement";
import GraphCanvas from "@/components/GraphCanvas";

const GraphPage: NextPage = () => {
  return (
    <HeaderedPage>
      <NonNullGraphsContextElement
        contextElement={(context) => <GraphCanvas context={context} />}
      />
    </HeaderedPage>
  );
};

export default GraphPage;
