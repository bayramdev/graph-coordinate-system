import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import HeaderedPage from "@/components/HeaderedPage";
import NonNullGraphsContextElement from "@/components/NonNullGraphsContextElement";
const CoordinatesCanvas = dynamic(
  () => import("@/components/CoordinatesCanvas"),
  { ssr: false }
);

const CoordinateSystemPage: NextPage = () => {
  return (
    <HeaderedPage>
      <NonNullGraphsContextElement
        contextElement={(context) => (
          <CoordinatesCanvas matrix={context.matrix} />
        )}
      />
    </HeaderedPage>
  );
};

export default CoordinateSystemPage;
