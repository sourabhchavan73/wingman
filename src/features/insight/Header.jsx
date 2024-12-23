import React from "react";
import { labels } from "../../constants/labels";

function Header() {
  return (
    <div>
      <h1 className="text s-32 w-500 text-primary w-full">{labels.insights}</h1>
    </div>
  );
}

export default Header;
