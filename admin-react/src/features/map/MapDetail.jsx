import styled from "styled-components";
import MyMap from "./Map";

const StyledMapDetail = styled.div`
  width: 100%;
  
`;

export default function MapDetail() {
  return (
    <StyledMapDetail>
      <MyMap />
    </StyledMapDetail>
  );
}
