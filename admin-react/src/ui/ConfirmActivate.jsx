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

const ConfirmActivate = forwardRef(
  ({ resourceName, onConfirm, disabled, closeModal, state }, ref) => {
    const defRef = useRef();
    useImperativeHandle(ref, () => ({
      closeModal,
    }));
    return (
      <StyledConfirmActivate ref={defRef}>
        <Heading as="h3">Activate {resourceName}</Heading>
        <p>Are you sure you want to activate this {resourceName}.</p>

        <div>
          <Button
            variation="secondary"
            disabled={disabled}
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button disabled={disabled} onClick={onConfirm}>
            {state && <SpinnerMini />} Activate
          </Button>
        </div>
      </StyledConfirmActivate>
    );
  }
);

ConfirmActivate.displayName = "ConfirmActivate";
export default ConfirmActivate;
