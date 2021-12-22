import type { NextPage } from "next";
import HeaderedPage from "@/components/HeaderedPage";
import WorkInProgressAlert from "@/components/WorkInProgressAlert";

const ExtractDataPage: NextPage = () => {
  return (
    <HeaderedPage>
      <WorkInProgressAlert />
    </HeaderedPage>
  );
};

export default ExtractDataPage;
