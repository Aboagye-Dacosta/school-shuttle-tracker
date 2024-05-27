import styled from "styled-components";

import { Error } from "./FormRow";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  & input,
  button {
    width: 100%;
  }

  & input {
    border: 1px solid var(--color-grey-100);
  }

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.6rem;
`;


function FormRowVertical({ children, error, label }) {
  return (
    <StyledRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledRow>
  );
}

export default FormRowVertical;
