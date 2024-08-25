import styled from "styled-components";
import Empty from "../../ui/Empty";
import Heading from "../../ui/Heading";
import LoadingPage from "../../ui/LoadindPage";
import Pagination from "../../ui/Pagination";
import NotificationActions from "./NotificationActions";
import NotificationListItem from "./NotificationListItem";
import { useNotifications } from "./useNotifications";

const StyledNotificationsList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  & h3 {
    font-weight: bold;
  }

  & > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
    gap: 2rem;
    width: 100%;
  }
`;

export default function NotificationsList() {
  const { notifications = [], isLoadingNotifications } = useNotifications();

  return (
    <StyledNotificationsList>
      {isLoadingNotifications && <LoadingPage />}
      <div>
        <Heading as="h3">Notifications List</Heading>
        <NotificationActions />
      </div>
      <div>
        {!notifications.length ? (
          <Empty resource="Notifications" />
        ) : (
          notifications.map((notification) => (
            <NotificationListItem
              notification={notification}
              key={notification.id}
            />
          ))
        )}
      </div>
      <Pagination count={notifications.length} />
    </StyledNotificationsList>
  );
}
