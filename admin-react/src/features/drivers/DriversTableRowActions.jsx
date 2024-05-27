import PropTypes from "prop-types";
import { BiSolidGrid } from "react-icons/bi";
import { FaPen, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";

function DriversTableRowActions({ id }) {
  return (
    <ButtonGroup type="horizontal">
      <Modal>
        <Modal.Open opens={`driver-${id}`}>
          <Button variation="danger" size="small">
            <FaTrash />
          </Button>
        </Modal.Open>
        <Modal.Window name={`driver-${id}`}>
          <ConfirmDelete resourceName="Driver" onConfirm={() => {}} />
        </Modal.Window>
      </Modal>
      <Button size="small">
        <FaPen />
      </Button>
      <Button
        variation="secondary"
        size="small"
        as={Link}
        to={`/drivers/${id}`}
      >
        <BiSolidGrid />
      </Button>
    </ButtonGroup>
  );
}

DriversTableRowActions.propTypes = {
  id: PropTypes.string,
};

export default DriversTableRowActions;
