import React from "react";
import Header from "./Header";
import MetricCard from "./MetricCard";

function AtaGlance() {
  return (
    <div className="flex flex-col gap-7">
      <Header />
      <MetricCard />
    </div>
  );
}

export default AtaGlance;
