import styled from "styled-components"

import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";

const StyledForm = styled.form`
  margin: 1rem 0;
`

function AccountUpdateUserDetails() {
  return (
    <>
      <Heading as="h">User Details Update</Heading>
      <StyledForm>
        <FormRow label="Username">
          <Input id="username" />
        </FormRow>
        <FormRow label="Email">
          <Input id="email" />
        </FormRow>
        <FormRow>
          <Button type="reset" variation="secondary">
            Reset
          </Button>
          <Button id="btn">Update</Button>
        </FormRow>
      </StyledForm>
    </>
  );
}

export default AccountUpdateUserDetails;
