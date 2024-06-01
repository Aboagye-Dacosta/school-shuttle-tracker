import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmActivate = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmActivate({ resourceName, onConfirm, disabled, closeModal }) {
  return (
    <StyledConfirmActivate>
      <Heading as="h3">Activate {resourceName}</Heading>
      <p>Are you sure you want to activate this {resourceName}.</p>

      <div>
        <Button variation="secondary" disabled={disabled} onClick={closeModal}>
          Cancel
        </Button>
        <Button disabled={disabled} onClick={onConfirm}>
          Activate
        </Button>
      </div>
    </StyledConfirmActivate>
  );
}

export default ConfirmActivate;
