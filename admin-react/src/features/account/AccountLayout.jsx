import styled from "styled-components";

const StyledAccountLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  gap: 5rem;
  background-color: var(--color-grey-0);
  padding: 2rem 3rem;
`;

function AccountLayout({ children }) {
  return <StyledAccountLayout>{children}</StyledAccountLayout>;
}

export default AccountLayout;
