import React from "react";
import AtaGlance from "../../features/ataglance/AtaGlance";
import Insight from "../../features/insight/Insight";

function DashboardLayout() {
  return (
    <div className="flex flex-col gap-10">
      <AtaGlance />
      <Insight />
    </div>
  );
}

export default DashboardLayout;
