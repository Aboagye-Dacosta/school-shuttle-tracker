import styled from "styled-components";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";

const StyledDriversFormModal = styled.div`
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

function DriversFormModal() {
  return (
    <StyledDriversFormModal>
      <StyledHeading as="h3">Add a Driver</StyledHeading>
      <StyledForm>
        <FormRow label="Driver's Name">
          <Input id="driver-name" />
        </FormRow>
        <FormRow label="Driver's Email">
          <Input id="driver-email" type="email" />
        </FormRow>
        <FormRow label="Driver's Password">
          <Input id="driver-password" type="password" />
        </FormRow>
        <FormRow label="Bus Number">
          <Input id="driver-bus-number" />
        </FormRow>
        <FormRow label="Drivers Image">
          <FileInput id="driver-image" />
        </FormRow>
        <FormRow label="Drivers Tel">
          <Input id="driver-tel" />
        </FormRow>
        <FormRow label="Drivers Address">
          <Input id="driver-address" />
        </FormRow>
        {/* <Row type="horizontal"> */}
        <FormRow>
          <Button variation="secondary" type="reset">
            Reset
          </Button>
          <Button>Save</Button>
        </FormRow>
        {/* </Row> */}
      </StyledForm>
    </StyledDriversFormModal>
  );
}

export default DriversFormModal;
