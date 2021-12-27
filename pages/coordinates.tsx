import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import PageTemplate from "@/components/PageTemplate";
import NonNullGraphsContextElement from "@/components/NonNullGraphsContextElement";
import CoordinatesInfo from "@/components/CoordinatesInfo";
const CoordinatesCanvas = dynamic(
  () => import("@/components/CoordinatesCanvas"),
  { ssr: false }
);

const CoordinateSystemPage: NextPage = () => {
  const [selected, setSelected] = React.useState<number | null>(null);

  return (
    <PageTemplate>
      <NonNullGraphsContextElement
        contextElement={(context) => (
          <>
            <CoordinatesCanvas
              context={context}
              selected={selected}
              setSelected={setSelected}
            />
            {selected !== null ? (
              <CoordinatesInfo context={context} selectedIndex={selected - 1} />
            ) : null}
          </>
        )}
      />
    </PageTemplate>
  );
};

export default CoordinateSystemPage;
