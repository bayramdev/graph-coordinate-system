import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import HeaderedPage from "@/components/HeaderedPage";
const CoordinatesCanvas = dynamic(
  () => import("@/components/CoordinatesCanvas"),
  { ssr: false }
);
import NoDataAlert from "@/components/NoDataAlert";
import NotSelectedAlert from "@/components/NotSelectedAlert";
import { GraphsContext } from "@/contexts/graphs";

const CoordinateSystemPage: NextPage = () => {
  const { graphs, matrix } = React.useContext(GraphsContext);

  return (
    <HeaderedPage>
      {graphs ? (
        matrix ? (
          <CoordinatesCanvas matrix={matrix} />
        ) : (
          <NotSelectedAlert />
        )
      ) : (
        <NoDataAlert />
      )}
    </HeaderedPage>
  );
};

export default CoordinateSystemPage;
