import styled from "styled-components";

import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonText from "../../ui/ButtonText";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";

import { useMoveBack } from "../../hooks/useMoveBack";

import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DriverDataBox from "./DriverDataBox";
import DriversFormModal from "./DriversFormModal";
import { useDeleteDriver } from "./useDeleteDriver";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function DriverDetails() {
  const moveBack = useMoveBack();
  const ref = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteDriver, isDeletingDriver } = useDeleteDriver(id);

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Driver #{id}</Heading>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <DriverDataBox />

      <ButtonGroup>
        <Modal>
          <Modal.Open opens="delete-driver">
            <Button size="small" variation="danger">
              <span>Delete Driver</span>
            </Button>
          </Modal.Open>

          <Modal.Window name="delete-driver">
            <ConfirmDelete
              resourceName="Driver"
              state={isDeletingDriver}
              ref={ref}
              onConfirm={() => {
                deleteDriver(id, {
                  onSuccess: () => {
                    navigate("/drivers");
                  },
                  onSettled: () => {
                    if (ref?.current) {
                      ref?.current?.closeModal();
                    }
                  },
                });
              }}
              // disabled={isDeletingBooking}
            />
          </Modal.Window>
          <Modal.Open opens="edit-driver">
            <Button size="small">
              <span>Edit Driver</span>
            </Button>
          </Modal.Open>

          <Modal.Window name="edit-driver">
            <DriversFormModal />
          </Modal.Window>
        </Modal>

        <Row type="horizontal">
          <Button as={Link} to={`/drivers/${id}/map`}>
            Track in real time
          </Button>
        </Row>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default DriverDetails;
