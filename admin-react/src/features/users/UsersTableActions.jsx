import PropTypes from "prop-types";
import { CgMoreVertical } from "react-icons/cg";
import { FaTrash } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";
import { VscActivateBreakpoints } from "react-icons/vsc";
import styled from "styled-components";

import { useUser } from "../../context/UsersContext";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonIcon from "../../ui/ButtonIcon";
import ConfirmActivate from "../../ui/ConfirmActivate";
import ConfirmBlock from "../../ui/ConfirmBlock";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";

const StyledDeleteIcon = styled(FaTrash)`
  color: var(--color-red-800) !important;
`;
const StyledBlockIcon = styled(MdBlock)`
  color: var(--color-yellow-700) !important;
`;
const StyledActivateIcon = styled(VscActivateBreakpoints)`
  color: var(--color-green-700) !important;
`;

function UsersTableActions({ id, status }) {
  const { openLog, setUserId } = useUser();
  return (
    <ButtonGroup>
      <Button
        size="small"
        onClick={() => {
          console.log(id);
          setUserId(id);
          openLog();
        }}
      >
        logs
      </Button>
      <Menus.ToggleButton id={`menu-${id}`}>
        <ButtonIcon>
          <CgMoreVertical />
        </ButtonIcon>
      </Menus.ToggleButton>
      <Modal>
        <Menus.List id={`menu-${id}`}>
          {status == "active" && (
            <Modal.Open opens="block-user">
              <Menus.Button icon={<StyledBlockIcon />}>Block</Menus.Button>
            </Modal.Open>
          )}

          {status == "blocked" && (
            <Modal.Open opens="activate-user">
              <Menus.Button icon={<StyledActivateIcon />}>
                Activate
              </Menus.Button>
            </Modal.Open>
          )}

          <Modal.Open opens="delete-user">
            <Menus.Button icon={<StyledDeleteIcon />}>Delete</Menus.Button>
          </Modal.Open>
        </Menus.List>
        <Modal.Window name="delete-user">
          <ConfirmDelete resourceName="User" onConfirm={() => {}} />
        </Modal.Window>
        <Modal.Window name="block-user">
          <ConfirmBlock resourceName="User" onConfirm={() => {}} />
        </Modal.Window>
        <Modal.Window name="activate-user">
          <ConfirmActivate resourceName="User" onConfirm={() => {}} />
        </Modal.Window>
      </Modal>
    </ButtonGroup>
  );
}

UsersTableActions.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
};

export default UsersTableActions;
