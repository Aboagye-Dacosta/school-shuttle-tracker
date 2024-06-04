import styled from "styled-components";

import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";


const StyledForm = styled.form`
  margin: 1rem 0;
`;


function AccountUpdateUserPassword() {
  return (
    <>
      <Heading as="h3">Password Update</Heading>
      <StyledForm>
        <FormRow label="Password">
          <Input id="password" />
        </FormRow>
        <FormRow label="Confirm Password">
          <Input id="con-firm" />
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

export default AccountUpdateUserPassword;
