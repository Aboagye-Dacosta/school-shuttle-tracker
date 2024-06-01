import { format } from "date-fns";
import styled from "styled-components";

import Modal from "../../ui/Modal";
import Tag from "../../ui/Tag";
import UserLogDetails from "./UserLogDetails";

const StyledUserLog = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  cursor: pointer;

  padding: 1rem;
  box-shadow: var(--shadow-sm);

  &:hover {
    box-shadow: var(--shadow-md);
  }

  & span {
    font-size: 1.4rem;
  }
`;

function UserLog({ data: { busNumber, created_at } }) {
  return (
    <Modal>
      <Modal.Open opens="log-modal">
        <StyledUserLog>
          <Tag type="yellow">Bus &mdash; {busNumber}</Tag>
          <span> {format(new Date(created_at), "MMM dd yyyy")}</span>
        </StyledUserLog>
      </Modal.Open>
      <Modal.Window name="log-modal">
        <UserLogDetails />
      </Modal.Window>
    </Modal>
  );
}

export default UserLog;
