import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import { HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers } from "react-icons/hi2";
import { IoBusOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Tag from "./Tag"
import { TfiWheelchair } from "react-icons/tfi";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscAccount, VscFeedback } from "react-icons/vsc";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.6rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 2.4rem;
    align-items: center;
  }

  & svg {
    font-size: 2rem;
    color: var(--color-grey-900);
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
  account: <VscAccount />,
};


const StyledIcon = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  padding: 1rem;
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  background-color: var(--color-brand-700);
  box-shadow: var(--shadow-sm);

  svg {
    color: var(--color-brand-900);
  }
`


function Header ()
{
  
  const location = useLocation();
  const { role } = useAuth()
  
  return (
    <StyledHeader>
      <div>
        <StyledIcon>

        {icons[location.pathname.split("/")[1]]}
        </StyledIcon>
        <Tag type={role == "admin" ? "red" : "yellow"}>{role}</Tag>
      </div>
      <div>
        <UserAvatar />
        <HeaderMenu />
      </div>
    </StyledHeader>
  );
}

export default Header;
