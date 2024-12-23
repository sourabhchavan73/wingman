import React from "react";
import { labels } from "../../constants/labels";
import Period from "./Period";

function Header() {
  return (
    <div className="flex">
      <h1 className="text s-32 w-500 text-primary w-full">
        {labels.ataGlance}
      </h1>
      <Period />
    </div>
  );
}

export default Header;
