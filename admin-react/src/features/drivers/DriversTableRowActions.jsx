import PropTypes from "prop-types";
import { useRef } from "react";
import { BiSolidGrid } from "react-icons/bi";
import { FaPen, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDriverCont } from "../../context/DriversFormContext";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import { useDeleteDriver } from "./useDeleteDriver";
import { useDriver } from "./useDriver";

function DriversTableRowActions({ id }) {
  const ref = useRef({ current: null });

  const { deleteDriver, isDeletingDriver } = useDeleteDriver(id);
  const { setDriver, setHasDriver } = useDriverCont();
  const { driver } = useDriver(id);

  console.log(id);
  return (
    <ButtonGroup type="horizontal">
      <Modal>
        <Modal.Open opens={`driver-${id}`}>
          <Button variation="danger" size="small">
            <FaTrash />
          </Button>
        </Modal.Open>
        <Modal.Window name={`driver-${id}`}>
          <ConfirmDelete
            resourceName="Driver"
            state={isDeletingDriver}
            ref={ref}
            onConfirm={() => {
              setDriver(null);
              deleteDriver(id, {
                onSettled: () => {
                  if (ref?.current) {
                    ref.current?.closeModal();
                  }
                },
              });
            }}
          />
        </Modal.Window>
      </Modal>
      <Button
        size="small"
        onClick={() => {
          setHasDriver(true);
          setDriver(driver);
        }}
      >
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
