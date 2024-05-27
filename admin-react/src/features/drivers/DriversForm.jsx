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
  return (
    <StyledDriversForm>
      <StyledHeading as="h3">Add a Driver</StyledHeading>
      <StyledForm>
        <FormRowVertical label="Driver's Name">
          <Input id="driver-name" />
        </FormRowVertical>
        <FormRowVertical label="Driver's Email">
          <Input id="driver-email" type="email" />
        </FormRowVertical>
        <FormRowVertical label="Driver's Password">
          <Input id="driver-password" type="password" />
        </FormRowVertical>
        <FormRowVertical label="Bus Number">
          <Input id="driver-bus-number" />
        </FormRowVertical>
        <FormRowVertical label="Drivers Image">
          <FileInput id="driver-image" />
        </FormRowVertical>
        <FormRowVertical label="Drivers Tel">
          <Input id="driver-tel" />
        </FormRowVertical>
        <FormRowVertical label="Drivers Address">
          <Input id="driver-address" />
        </FormRowVertical>
        {/* <Row type="horizontal"> */}
        <FormRow>
          <Button variation="secondary" type="reset">Reset</Button>
          <Button>Save</Button>
        </FormRow>
        {/* </Row> */}
      </StyledForm>
    </StyledDriversForm>
  );
}

export default DriversForm;
