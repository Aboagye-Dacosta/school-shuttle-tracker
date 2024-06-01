import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmBlock = styled.div`
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

function ConfirmBlock({ resourceName, onConfirm, disabled, closeModal }) {
  return (
    <StyledConfirmBlock>
      <Heading as="h3">Block {resourceName}</Heading>
      <p>
        Are you sure you want to block this {resourceName}.
      </p>

      <div>
        <Button variation="secondary" disabled={disabled} onClick={closeModal}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Block
        </Button>
      </div>
    </StyledConfirmBlock>
  );
}

export default ConfirmBlock;
