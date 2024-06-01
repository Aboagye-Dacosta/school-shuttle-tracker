import styled from "styled-components";
import UsersTable from "./UsersTable";

const StyledUserListings = styled.div`
  flex: 1;
  background-color: var(--color-grey-0);
`;

function UsersListing() {
  return (
    <StyledUserListings>
      <UsersTable />
    </StyledUserListings>
  );
}

export default UsersListing;
