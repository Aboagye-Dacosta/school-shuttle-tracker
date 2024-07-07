import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonText from "../../ui/ButtonText";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";

import { useMoveBack } from "../../hooks/useMoveBack";

import { busData } from "../../assets/data";
import BusDataBox from "./BusDataBox";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BusDetail() {
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  const { status, id: busId } = busData[0];

  const statusToTagName = {
    active: "green",
    inactive: "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Bus #{busId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BusDataBox />

      <ButtonGroup>
        <Modal>
          {status === "inactive" && (
            <Button
              variation="primary"
              onClick={() => navigate(`/check-in/${busId}`)}
            >
              Activate
            </Button>
          )}
          <Modal.Open opens="delete-booking">
            <Button size="small" variation="danger" tooltip="delete">
              <span>Delete Bus</span>
            </Button>
          </Modal.Open>

          <Modal.Window name="delete-booking">
            <ConfirmDelete
              resourceName="booking"
              onConfirm={() => {}}
              // disabled={isDeletingBooking}
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
      <Row type="horizontal">
        <Button as={Link} to={`/buses/${busId}/map`}>
          Track in real time
        </Button>
      </Row>
    </>
  );
}

export default BusDetail;
