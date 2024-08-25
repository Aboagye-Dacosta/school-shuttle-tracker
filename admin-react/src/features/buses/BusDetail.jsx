import { Link, useNavigate, useParams } from "react-router-dom";
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

import { useQueryClient } from "@tanstack/react-query";
import { Fragment, useRef } from "react";
import ConfirmActivate from "../../ui/ConfirmActivate";
import ConfirmDeactivate from "../../ui/ConfirmDeactivate";
import LoadingSkeleton from "../../ui/LoadingSkeleton";
import BusDataBox from "./BusDataBox";
import { useBus } from "./useBus";
import { useDeleteBus } from "./useDeleteBus";
import { useUpdateBus } from "./useUpdateBus";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BusDetail() {
  const ref = useRef({ current: null });

  const moveBack = useMoveBack();
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { bus, isLoadingBus } = useBus(id);
  const { deleteBus, isDeletingBus } = useDeleteBus(id);
  const { updateBus, isUpdatingBus } = useUpdateBus();

  const statusToTagName = {
    active: "green",
    inactive: "silver",
  };

  return (
    <>
      {isLoadingBus ? (
        <LoadingSkeleton />
      ) : (
        <Fragment>
          <Row type="horizontal">
            <HeadingGroup>
              <Heading as="h1">Bus #{bus?.id}</Heading>
              <Tag type={statusToTagName[bus?.busStatus]}>{bus?.busStatus}</Tag>
            </HeadingGroup>
            <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
          </Row>

          <BusDataBox bus={bus} />

          <ButtonGroup>
            <Modal>
              {bus?.busStatus === "inactive" && (
                <Modal.Open opens="activate-bus">
                  <Button variation="primary">Activate bus</Button>
                </Modal.Open>
              )}
              {bus?.busStatus === "active" && (
                <Modal.Open opens="deactivate-bus">
                  <Button variation="error">Deactivate bus</Button>
                </Modal.Open>
              )}
              <Modal.Open opens="delete-bus">
                <Button size="small" variation="danger" tooltip="delete">
                  <span>Delete Bus</span>
                </Button>
              </Modal.Open>

              <Modal.Window name="delete-bus">
                <ConfirmDelete
                  ref={ref}
                  resourceName="Bus"
                  state={isDeletingBus}
                  disabled={isDeletingBus}
                  onConfirm={() => {
                    deleteBus("", {
                      onSuccess: () => {
                        navigate("/buses");
                      },
                      onSettled: () => {
                        ref?.current?.closeModal();
                      },
                    });
                  }}
                  // disabled={isDeletingbus}
                />
              </Modal.Window>
              <Modal.Window name="activate-bus">
                <ConfirmActivate
                  resourceName="bus"
                  ref={ref}
                  state={isUpdatingBus}
                  disabled={isUpdatingBus}
                  onConfirm={() => {
                    updateBus(
                      { ...bus, busStatus: "active" },
                      {
                        onSettled: () => {
                          queryClient.invalidateQueries({
                            queryKey: ["bus", id],
                          });
                          ref?.current?.closeModal();
                        },
                      }
                    );
                  }}
                  // disabled={isUpdatingBus}
                />
              </Modal.Window>
              <Modal.Window name="deactivate-bus">
                <ConfirmDeactivate
                  ref={ref}
                  resourceName="bus"
                  state={isUpdatingBus}
                  disabled={isUpdatingBus}
                  onConfirm={() => {
                    updateBus(
                      { ...bus, busStatus: "inactive" },
                      {
                        onSettled: () => {
                          queryClient.invalidateQueries({
                            queryKey: ["bus", id],
                          });
                          ref?.current?.closeModal();
                        },
                      }
                    );
                  }}
                  // disabled={isDeletingbus}
                />
              </Modal.Window>
            </Modal>

            <Button variation="secondary" onClick={moveBack}>
              Back
            </Button>
          </ButtonGroup>
          <Row type="horizontal">
            <Button as={Link} to={`/buses/${id}/map`}>
              Track in real time
            </Button>
          </Row>
        </Fragment>
      )}
    </>
  );
}

export default BusDetail;
