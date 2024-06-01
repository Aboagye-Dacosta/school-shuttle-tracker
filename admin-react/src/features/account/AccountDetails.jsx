import Heading from "../../ui/Heading";
import AccountAvatar from "./AccountAvatar";
import AccountLayout from "./AccountLayout";
import AccountUserForm from "./AccountUserForm";

function AccountDetails() {
  return (
    <>
      <Heading>Account</Heading>
      <AccountLayout>
        <AccountAvatar />
        <AccountUserForm />
      </AccountLayout>
    </>
  );
}

export default AccountDetails;
