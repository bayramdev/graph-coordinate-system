import type { NextPage } from "next";
import { HeaderedPage } from "@/components/HeaderedPage";
import { WorkInProgressAlert } from "@/components/WorkInProgresAlert";

const CoordinateSystemPage: NextPage = () => {
  return (
    <HeaderedPage>
      <WorkInProgressAlert />
    </HeaderedPage>
  );
};

export default CoordinateSystemPage;
