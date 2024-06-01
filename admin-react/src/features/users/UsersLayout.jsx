import PropTypes from "prop-types"
import styled from "styled-components";

const StyledUsersLayout = styled.div`
  display: flex;
  gap: 2rem;
`;
function UsersLayout({ children }) {
  return <StyledUsersLayout>{children}</StyledUsersLayout>;
}

UsersLayout.propTypes = {
  children: PropTypes.any
}

export default UsersLayout;
