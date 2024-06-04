import styled from "styled-components";

import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";

const StyledAccountAvatar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const StyledAvatar = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: var(--color-grey-100);
  border-radius: 10rem;
  overflow: hidden;

  & img {
    width: 100%;

    object-fit: cover;
    background-position: center;
  }
`;

function AccountAvatar() {
  return (
    <StyledAccountAvatar>
      <StyledAvatar>
        <img src={"/default-user.jpg"} alt="user avatar" />
      </StyledAvatar>
      <FormRow>
        <FileInput />
      </FormRow>
    </StyledAccountAvatar>
  );
}

export default AccountAvatar;
