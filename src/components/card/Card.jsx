import React from "react";
import StyledCard from "./StyledCard";

function Card({ children, ...props }) {
  return <StyledCard {...props}>{children}</StyledCard>;
}

export default Card;
