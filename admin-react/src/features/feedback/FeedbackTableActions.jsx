import PropTypes from "prop-types";
import { BiSolidGrid } from "react-icons/bi";
import { FaTrash } from "react-icons/fa6";

import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import FeedbackDetail from "./FeedbackDetail";

// const StyledDeleteIcon = styled(FaTrash)`
//   color: var(--color-red-800) !important;
// `;
// const StyledBlockIcon = styled(MdBlock)`
//   color: var(--color-yellow-700) !important;
// `;
// const StyledActivateIcon = styled(VscActivateBreakpoints)`
//   color: var(--color-green-700) !important;
// `;

function FeedbackTableActions({ id, feedback }) {
  return (
    <Modal>
      <ButtonGroup>
        <Modal.Open opens={`delete-${id}`}>
          <Button variation="danger" size="small">
            <FaTrash />
          </Button>
        </Modal.Open>

        <Modal.Open opens={`more-${id}`}>
          <Button variation="secondary" size="small">
            <BiSolidGrid />
          </Button>
        </Modal.Open>
      </ButtonGroup>

      <Modal.Window name={`more-${id}`}>
        <FeedbackDetail feedback={feedback} />
      </Modal.Window>
      <Modal.Window name={`delete-${id}`}>
        <ConfirmDelete resourceName="Bus" onConfirm={() => {}} />
      </Modal.Window>
    </Modal>
  );
}

FeedbackTableActions.propTypes = {
  feedback: PropTypes.object,
  id: PropTypes.string,
};

export default FeedbackTableActions;
