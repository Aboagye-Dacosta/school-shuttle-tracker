import styled from "styled-components";
import Avatar from "../../ui/Avatar";
// import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

function UserAvatar() {
  // const { user } = useUser();
  // const { avatar, fullName } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar alt={`avatar for not set`} />
      <span>James</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
