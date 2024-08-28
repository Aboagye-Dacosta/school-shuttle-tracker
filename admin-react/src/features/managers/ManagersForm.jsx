import styled from "styled-components";

import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import ControlledSelect from "../../ui/ControlledSelect";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCreateManager } from "./useCreateManager";
import { useAuth } from "../../context/AuthProvider";

const StyledManagersForm = styled.div`
  & form {
    padding: 2rem 3rem;
  }
`;

const StyledHeading = styled(Heading)`
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  font-size: 1.7rem;
  font-weight: bold;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & .bg {
    background-color: var(--color-grey-0);
  }

  & > div {
    padding: 1rem 2rem;
  }
`;

const options = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "User",
    value: "user",
  },
];

function ManagersForm() {
  const { createManager, isCreatingManager } = useCreateManager();
  const {user} = useAuth();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const handleSubmitForm = (value) => {
    createManager(
      {
        ...value,
        role: value["role"]["value"],
        createdAt: new Date(Date.now()).toISOString(),
        managerImage: value["userImage"]?.length
          ? value["userImage"][0]
          : "",
      },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };

  return (
    <StyledManagersForm>
      <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
        {/* <form> */}
        <div className="bg">
          <StyledHeading as="h3">Add/Edit Manager</StyledHeading>
          <FormRow label="Select user role" error={errors?.role?.message}>
            <ControlledSelect
              name="role"
              message={"user role is required"}
              control={control}
            >
              <Select options={options} disabled={isCreatingManager} />
            </ControlledSelect>
          </FormRow>
          <FormRow label="Username" error={errors?.managerUsername?.message}>
            <Input
              id="username"
              disabled={isCreatingManager}
              {...register("username", {
                required: {
                  value: true,
                  message: "Manager username is required",
                },
              })}
            />
          </FormRow>
          <FormRow label="Email" error={errors?.managerEmail?.message}>
            <Input
              disabled={isCreatingManager}
              id="email"
              {...register("userEmail", {
                required: {
                  value: true,
                  message: "Manager email is required",
                },
              })}
            />
          </FormRow>
          <FormRow label="Upload an image ">
            <FileInput id="file" {...register("managerImage")} />
          </FormRow>
          {/* <FormRow>
              <Button variation="secondary">Reset</Button>
              <Button>Save</Button>
            </FormRow> */}
          {/* </form> */}
        </div>
        <div className="bg">
          <StyledHeading as="h3">Create Password</StyledHeading>
          <FormRow label="Password" error={errors?.password?.message}>
            <Input
              id="password"
              disabled={isCreatingManager}
              {...register("password", {
                minLength: {
                  value: 8,
                  message: "password must at least 8 characters",
                },
                required: {
                  value: true,
                  message: "Manager password is required",
                },
              })}
            />
          </FormRow>
          <FormRow
            label="Confirm password"
            error={errors?.confirmPassword?.message ?? errors?.confirmPassword}
          >
            <Input
              id="confirm-pass"
              disabled={isCreatingManager}
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Manager password is required",
                },
                validate: (value) =>
                  value != getValues()["password"]
                    ? "Must be equal to password"
                    : null,
              })}
            />
          </FormRow>
          <FormRow>
            <Button
              variation="secondary"
              type="reset"
              onClick={() => {
                reset();
              }}
            >
              Reset
            </Button>
            <Button disabled={isCreatingManager} type="submit">
              {isCreatingManager && <SpinnerMini />} Save
            </Button>
          </FormRow>
        </div>
      </StyledForm>
      {/* </form> */}
    </StyledManagersForm>
  );
}

export default ManagersForm;
