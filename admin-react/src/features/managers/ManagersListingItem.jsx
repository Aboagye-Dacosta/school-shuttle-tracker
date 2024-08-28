import PropTypes from "prop-types";
import styled from "styled-components";

import Menus from "../../ui/Menus";
import Tag from "../../ui/Tag";
import ManagersListingsActions from "./ManagersListingsActions";

const StyledManagersListingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: var(--shadow-sm);
  padding: 1rem;
  width: 100%;

  &:hover {
    box-shadow: var(--shadow-md);
  }

  & div:first-of-type {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
`;
const StyledImage = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  overflow: hidden;

  & img {
    object-fit: cover;
  }
`;
const StyledParagraph = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  & span:first-of-type {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

function ManagersListingItem({
  data: { id, userImage, username, role, userEmail },
}) {
  return (
    <Menus>
      <StyledManagersListingItem>
        <div>
          <StyledImage>
            <img
              src={userImage.trim().length ? userImage : "/default-user.jpg"}
              alt="image"
            />
          </StyledImage>
          <StyledParagraph>
            <span>{username}</span>
            <span>{userEmail}</span>
            <Tag type={role == "admin" ? "red" : "yellow"}>{role}</Tag>
          </StyledParagraph>
        </div>
        <ManagersListingsActions id={id} />
      </StyledManagersListingItem>
    </Menus>
  );
}

ManagersListingItem.propTypes = {
  data: PropTypes.object,
};

export default ManagersListingItem;
