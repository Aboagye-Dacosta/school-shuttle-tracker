import styled from "styled-components";

import { AiOutlineClose } from "react-icons/ai";
import ButtonIcon from "../../ui/ButtonIcon";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";

import UserLog from "./UserLog";
import { useUser } from "../../context/UsersContext";

const StyledUserLogs = styled.div`
  width: 30rem;
  background-color: var(--color-grey-0);
`;

const StyledHeading = styled(Heading)`
  font-size: 1.7rem;
  font-weight: bold;
  box-shadow: var(--shadow-sm);
  padding: 2rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogBody = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function UserLogs ()
{
  const {closeLog,userId} = useUser()
  return (
    <StyledUserLogs>
      <StyledHeading as="h3">
        <span>
          User <Tag type="red">#{userId}</Tag> Logs
        </span>
        <ButtonIcon onClick={closeLog}>
          <AiOutlineClose />
        </ButtonIcon>
      </StyledHeading>

      <StyledLogBody>
        <UserLog
          data={{ busNumber: "329829", created_at: new Date().toISOString() }}
        />
        <UserLog
          data={{ busNumber: "329829", created_at: new Date().toISOString() }}
        />
        <UserLog
          data={{ busNumber: "329829", created_at: new Date().toISOString() }}
        />
      </StyledLogBody>
    </StyledUserLogs>
  );
}

export default UserLogs;
