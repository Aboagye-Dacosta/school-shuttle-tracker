import PropTypes from "prop-types";
import { BiSolidGrid } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { genDate } from "../../helpers/utils";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import Tag from "../../ui/Tag";
import NotificationDetail from "./NotificationDetail";
import { useDeleteNotification } from "./useDeleteNotification";
import { useRef } from "react";

const StyledNotificationListItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  border: 1px solid var(--color-grey-300);
  cursor: pointer;

  &:hover .actions {
    opacity: 1;
  }
`;

const ItemHeader = styled.div`
  position: relative;
  border-bottom: 1px solid var(--color-grey-100);
  padding: 1rem 2rem;
  background-color: var(--color-grey-100);
  font-weight: bold;

  & > span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const HeaderActions = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 200ms ease-in-out;
  opacity: 0;
  /* background-color: var(--color-grey-500); */
  height: 100%;

  display: flex;
  align-items: center;
`;

const ItemBody = styled.div`
  padding: 1rem 2rem;
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const ItemFooter = styled.div`
  padding: 0 2rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span:first-of-type {
    display: flex;
    gap: 0.5rem;
  }

  & > span:last-of-type {
    font-size: 1.2rem;
  }
`;

export default function NotificationListItem ({ notification })
{
  const ref = useRef()
  const { notificationTitle, notificationMessage, notificationTarget, id, createdAt } = notification;
  const { deleteNotification,isDeletingNotification  } = useDeleteNotification();
  return (
    <StyledNotificationListItem>
      <ItemHeader>
        <span>{notificationTitle}</span>
        <HeaderActions className="actions">
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
              <NotificationDetail notification={notification} />
            </Modal.Window>
            <Modal.Window name={`delete-${id}`}>
              <ConfirmDelete
                ref={ref}
                state={isDeletingNotification}
                resourceName="Notification"
                onConfirm={() => {
                  deleteNotification(id, {
                    onSettled() {
                      ref?.current?.closeModal();
                    },
                  });
                }}
              />
            </Modal.Window>
          </Modal>
        </HeaderActions>
      </ItemHeader>
      <ItemBody>
        <p>{notificationMessage}</p>
      </ItemBody>
      <ItemFooter>
        <span>
          <Tag
            type={
              notificationTarget == "all"
                ? "blue"
                : notificationTarget == "student"
                ? "green"
                : "yellow"
            }
          >
            {notificationTarget}
          </Tag>
        </span>
        <span>{genDate(createdAt)}</span>
      </ItemFooter>
    </StyledNotificationListItem>
  );
}

NotificationListItem.propTypes = {
  notification: PropTypes.object,
};
