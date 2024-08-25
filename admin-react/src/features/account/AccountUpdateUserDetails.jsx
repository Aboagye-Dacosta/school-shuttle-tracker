import styled from "styled-components";

import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";

const StyledForm = styled.form`
  margin: 1rem 0;
`;

function AccountUpdateUserDetails() {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm({ defaultValues: user });

  const handleFormSubmit = (value) =>
  {
    
  };
  return (
    <>
      <Heading as="h">User Details Update</Heading>
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow label="Username">
          <Input
            id="username"
            {...register("managerUsername", {
              required: {
                value: true,
                message: "Manager username is required",
              },
            })}
          />
        </FormRow>
        <FormRow label="Email">
          <Input
            id="email"
            {...register("managerEmail", {
              required: {
                value: true,
                message: "Manager email is required",
              },
            })}
          />
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
