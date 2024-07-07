import { useForm } from "react-hook-form";
import styled from "styled-components";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";

const StyledDriversForm = styled.div`
  background-color: var(--color-grey-0);
`;

const StyledForm = styled.form`
  padding: 2rem 3rem;
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.7rem;
  /* background-color: var(--color-grey-200); */
  box-shadow: var(--shadow-sm);
  padding: 2rem 3rem;
`;

function DriversForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (value) => {
    console.log(value);
  };
  return (
    <StyledDriversForm>
      <StyledHeading as="h3">Drivers Form</StyledHeading>
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRowVertical label="Driver's Name" error={errors?.name?.message}>
          <Input
            id="driver-name"
            {...register("name", {
              required: {
                message: "Drivers name is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical label="Driver's Email" error={errors?.email?.message}>
          <Input
            id="driver-email"
            type="email"
            {...register("email", {
              required: {
                message: "Drivers email is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical
          label="Driver's Password"
          error={errors?.password?.message}
        >
          <Input
            id="driver-password"
            type="password"
            {...register("password", {
              required: {
                message: "Drivers password is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical label="Drivers Image">
          <FileInput id="driver-image" />
        </FormRowVertical>
        <FormRowVertical label="Drivers Tel" error={errors?.phone?.message}>
          <Input
            id="driver-tel"
            {...register("phone", {
              required: {
                message: "Drivers phone is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical
          label="Drivers Address"
          error={errors?.address?.message}
        >
          <Input
            id="driver-address"
            {...register("address", {
              required: {
                message: "Drivers address is required",
                value: true,
              },
            })}
          />
        </FormRowVertical>
        {/* <Row type="horizontal"> */}
        <FormRow>
          <Button variation="secondary" type="reset" onClick={reset}>
            Reset
          </Button>
          <Button>Save</Button>
        </FormRow>
        {/* </Row> */}
      </StyledForm>
    </StyledDriversForm>
  );
}

export default DriversForm;
