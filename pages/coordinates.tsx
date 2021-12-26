import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import PageTemplate from "@/components/PageTemplate";
import NonNullGraphsContextElement from "@/components/NonNullGraphsContextElement";
const CoordinatesCanvas = dynamic(
  () => import("@/components/CoordinatesCanvas"),
  { ssr: false }
);

const CoordinateSystemPage: NextPage = () => {
  return (
    <PageTemplate>
      <NonNullGraphsContextElement
        contextElement={(context) => (
          <CoordinatesCanvas matrix={context.matrix} />
        )}
      />
    </PageTemplate>
  );
};

export default CoordinateSystemPage;
