import styled from "styled-components";

import { useForm } from "react-hook-form";
import { useState } from "react";

import Button from "../../ui/Button";
import ControlledSelect from "../../ui/ControlledSelect";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

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

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & div {
    background-color: var(--color-grey-0);
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
  const [role, setRole] = useState();
  
  const { control } = useForm();
  return (
    <StyledManagersForm>
      <StyledForm>
        <div>
          <StyledHeading as="h3">Add/Edit Manager</StyledHeading>
          <form>
            <FormRow label="Select user role">
              <ControlledSelect
                name="status"
                message={"user role is required"}
                control={control}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <Select options={options} />
              </ControlledSelect>
            </FormRow>
            <FormRow label="Username">
              <Input id="username" />
            </FormRow>
            <FormRow label="Email">
              <Input id="email" />
            </FormRow>
            <FormRow label="Upload an image ">
              <FileInput id="file" />
            </FormRow>
            <FormRow>
              <Button variation="secondary">Reset</Button>
              <Button>Save</Button>
            </FormRow>
          </form>
        </div>
        <div>
          <StyledHeading as="h3">Create Password</StyledHeading>
          <form>
            <FormRow label="Password">
              <Input id="password" />
            </FormRow>
            <FormRow label="Confirm password">
              <Input id="confirm-pass" />
            </FormRow>
            <FormRow>
              <Button variation="secondary">Reset</Button>
              <Button>Save</Button>
            </FormRow>
          </form>
        </div>
      </StyledForm>
    </StyledManagersForm>
  );
}

export default ManagersForm;
