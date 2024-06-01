import PropTypes from "prop-types";
import styled from "styled-components";

const StyledManagersLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 39rem;
  gap: 2rem;
`;

function ManagersLayout({ children }) {
  return <StyledManagersLayout>{children}</StyledManagersLayout>;
}

ManagersLayout.propTypes = {
  children: PropTypes.any,
};

export default ManagersLayout;
