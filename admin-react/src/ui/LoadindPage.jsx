import styled from "styled-components";

import Spinner from "./Spinner";

const StyledLoadingPage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function LoadingPage() {
  return (
    <StyledLoadingPage>
      <div>
        <Spinner />
      </div>
    </StyledLoadingPage>
  );
}
