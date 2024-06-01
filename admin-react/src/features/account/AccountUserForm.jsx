import styled from "styled-components";
import AccountUpdateUserDetails from "./AccountUpdateUserDetails";
import AccountUpdateUserPassword from "./AccountUpdateUserPassword";

const StyledUserAccountForm = styled.div``;

function AccountUserForm() {
  return (
    <StyledUserAccountForm>
      <AccountUpdateUserDetails />
      <AccountUpdateUserPassword />
    </StyledUserAccountForm>
  );
}

export default AccountUserForm;
