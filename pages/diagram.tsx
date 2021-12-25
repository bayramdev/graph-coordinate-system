import React from "react";
import type { NextPage } from "next";
import HeaderedPage from "@/components/HeaderedPage";
import NonNullGraphsContextElement from "@/components/NonNullGraphsContextElement";
import DiagramCanvas from "@/components/DiagramCanvas";

const DiagramPage: NextPage = () => {
  return (
    <HeaderedPage>
      <NonNullGraphsContextElement
        contextElement={(context) => <DiagramCanvas context={context} />}
      />
    </HeaderedPage>
  );
};

export default DiagramPage;
