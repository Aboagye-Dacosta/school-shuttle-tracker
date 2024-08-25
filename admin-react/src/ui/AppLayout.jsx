import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { AuthenticationProvider } from "../context/AuthProvider";
import Header from "./Header";
import SideBar from "./SideBar";

const Main = styled.main`
  background-color: var(--color-grey-50);
  overflow: auto;
  padding: 4rem 4.8rem 6.4rem;
  position: relative;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
  return (
    <AuthenticationProvider>
      <StyledAppLayout>
        <Header />
        <SideBar />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </AuthenticationProvider>
  );
}

export default AppLayout;
