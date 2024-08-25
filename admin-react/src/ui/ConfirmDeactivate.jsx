import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import SpinnerMini from "./SpinnerMini";

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

const ConfirmDeactivate = forwardRef(
  ({ resourceName, onConfirm, disabled, closeModal, state }, ref) => {
    const defRef = useRef();
    useImperativeHandle(ref, () => ({
      closeModal,
    }));

    return (
      <StyledConfirmActivate ref={defRef}>
        <Heading as="h3">Activate {resourceName}</Heading>
        <p>Are you sure you want to deactivate this {resourceName}.</p>

        <div>
          <Button variation="danger" disabled={disabled} onClick={closeModal}>
            Cancel
          </Button>
          <Button disabled={disabled} onClick={onConfirm}>
            {state && <SpinnerMini />} Deactivate
          </Button>
        </div>
      </StyledConfirmActivate>
    );
  }
);
ConfirmDeactivate.displayName = "ConfirmDeactivate";

export default ConfirmDeactivate;
