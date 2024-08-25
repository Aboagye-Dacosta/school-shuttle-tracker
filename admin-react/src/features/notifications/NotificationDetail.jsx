import PropTypes from "prop-types";
import styled from "styled-components";
import { genDate } from "../../helpers/utils";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";

const StyledNotificationDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > *:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
    padding: 1rem 0;
    justify-content: start;
  }

  & > *,
  & > * > *,
  & label {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > :last-child {
    justify-content: space-between;
  }
`;

export default function NotificationDetail({
  notification: { notificationTitle, notificationMessage, notificationTarget, createdAt },
}) {
  return (
    <>
      <Heading as="h2">Notification</Heading>
      <StyledNotificationDetail>
        <Heading as="h3">{notificationTitle}</Heading>
        <p>{notificationMessage}</p>
        <div>
          <span>
            <Tag
              type={
                notificationTarget == "driver"
                  ? "blue"
                  : notificationTarget == "student"
                  ? "yellow"
                  : "green"
              }
            >
              {notificationTarget}
            </Tag>
          </span>
          <span>{genDate(createdAt)}</span>
        </div>
      </StyledNotificationDetail>
    </>
  );
}

NotificationDetail.propTypes = {
  notification: PropTypes.object,
};
