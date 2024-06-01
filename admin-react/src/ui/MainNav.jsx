import
  {
    HiOutlineHome,
    HiOutlineUsers
  } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoBusOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { TfiWheelchair } from "react-icons/tfi";
import { VscAccount, VscFeedback } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const icons = {
  dashboard: <HiOutlineHome />,
  buses: <IoBusOutline />,
  drivers: <TfiWheelchair />,
  users: <HiOutlineUsers />,
  managers: <RiUserSettingsLine />,
  notifications: <IoMdNotificationsOutline />,
  feedback: <VscFeedback />,
  account: <VscAccount />
};

function MainNav() {
  const { routes } = useAuth();

  const displayRoutes = routes.map((route) => (
    <li key={route}>
      <StyledNavLink to={`/${route.toLowerCase()}`}>
        {icons[route.toLowerCase()]}
        <span>{route.toUpperCase()}</span>
      </StyledNavLink>
    </li>
  ));

  return (
    <nav>
      <NavList>{displayRoutes}</NavList>
    </nav>
  );
}

export default MainNav;
