import styled from "styled-components";

const StyledCard = styled.div`
  box-shadow: ${(props) => props.boxshadow || "var(--shadow-type-1)"};
  padding: ${(props) => props.padding || "24px"};
  border-radius: ${(props) => props.borderradius || "20px"};
  background: ${(props) => props.background || "var(--surface-card)"};
`;

export default StyledCard;
