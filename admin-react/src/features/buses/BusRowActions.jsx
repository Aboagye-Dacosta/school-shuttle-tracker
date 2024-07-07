import PropTypes from "prop-types";
import { BiSolidGrid } from "react-icons/bi";
import { FaPen, FaTrash } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import CreateBusForm from "./CreateBusForm";

function BusRowActions({ id }) {
  return (
    <Modal>
      <ButtonGroup>
        <Modal.Open opens={`delete-${id}`}>
          <Button variation="danger" size="small">
            <FaTrash />
          </Button>
        </Modal.Open>
        <Modal.Open opens={`edit-${id}`}>
          <Button size="small">
            <FaPen />
          </Button>
        </Modal.Open>
        <Button
          variation="secondary"
          size="small"
          as={Link}
          to={`/buses/${id}`}
        >
          <BiSolidGrid />
        </Button>
      </ButtonGroup>

      <Modal.Window name={`delete-${id}`}>
        <ConfirmDelete resourceName="Notification" onConfirm={() => {}} />
      </Modal.Window>

      <Modal.Window name={`edit-${id}`}>
        <CreateBusForm />
      </Modal.Window>
    </Modal>
  );
}

BusRowActions.propTypes = {
  id: PropTypes.number,
};

export default BusRowActions;
