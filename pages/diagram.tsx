import React from "react";
import type { NextPage } from "next";
import PageTemplate from "@/components/PageTemplate";
import NonNullGraphsContextElement from "@/components/NonNullGraphsContextElement";
import DiagramCanvas from "@/components/DiagramCanvas";

const DiagramPage: NextPage = () => {
  return (
    <PageTemplate>
      <NonNullGraphsContextElement
        contextElement={(context) => <DiagramCanvas context={context} />}
      />
    </PageTemplate>
  );
};

export default DiagramPage;
