import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import SpinnerMini from "./SpinnerMini";

const StyledConfirmBlocked= styled.div`
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

const ConfirmBlocked = forwardRef(
  ({ resourceName, onConfirm, disabled, closeModal, state }, ref) => {
    const defRef = useRef();
    useImperativeHandle(ref, () => ({
      closeModal,
    }));
    return (
      <StyledConfirmBlocked ref={defRef}>
        <Heading as="h3">Blocked {resourceName}</Heading>
        <p>Are you sure you want to Blocked this {resourceName}.</p>

        <div>
          <Button
            variation="secondary"
            disabled={disabled}
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button disabled={disabled} onClick={onConfirm}>
            {state && <SpinnerMini />} Block
          </Button>
        </div>
      </StyledConfirmBlocked>
    );
  }
);

ConfirmBlocked.displayName = "ConfirmBlocked";
export default ConfirmBlocked;
