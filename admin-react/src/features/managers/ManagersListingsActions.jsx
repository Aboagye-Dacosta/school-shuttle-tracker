import PropTypes from "prop-types";
import { CgMoreVertical } from "react-icons/cg";
import { FaPen, FaTrash } from "react-icons/fa6";
import styled from "styled-components";

import ButtonIcon from "../../ui/ButtonIcon";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";

const StyledDeleteIcon = styled(FaTrash)`
  color: var(--color-red-800) !important;
`;

function ManagersListingsActions({ id }) {
  return (
    <>
      <Modal>
        <Menus.ToggleButton id={id}>
          <ButtonIcon>
            <CgMoreVertical />
          </ButtonIcon>
        </Menus.ToggleButton>
        <Menus.List id={id}>
          <Modal.Open opens="delete-manager">
            <Menus.Button icon={<StyledDeleteIcon />}>Delete</Menus.Button>
          </Modal.Open>
          <Menus.Button icon={<FaPen />}>Edit</Menus.Button>
        </Menus.List>
        <Modal.Window name="delete-manager">
          <ConfirmDelete resourceName="manager" onConfirm={() => {}} />
        </Modal.Window>
      </Modal>
    </>
  );
}

ManagersListingsActions.propTypes = {
  id: PropTypes.string,
};

export default ManagersListingsActions;
