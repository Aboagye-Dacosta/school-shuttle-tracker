import styled from "styled-components";
import Empty from "../../ui/Empty";
import Heading from "../../ui/Heading";
import Pagination from "../../ui/Pagination";
import NotificationActions from "./NotificationActions";
import NotificationListItem from "./NotificationListItem";
import { listGen } from "../../helpers/utils";

const StyledNotificationsList = styled.div`
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

const notification = {
  id: "1",
  title:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem amet perspiciatis voluptatibus debitis",
  message:
    "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem amet perspiciatis voluptatibus debitis quibusdam commodi sunt voluptates voluptatum eveniet modi! Repellendus consequatur, iste exercitationem cumque ipsum, repellat ratione, officia quae illo ad magnam earum rem ab! Aut veniam et ullam dolores reprehenderit maxime aperiam voluptates vero in dolorum?",
  createdAt: new Date(Date.now()).toISOString(),
};

const status = {
  0: "pending",
  1: "read",
  2: "hold",
};
const target = {
  0: "all",
  1: "student",
  2: "driver",
};

export default function NotificationsList() {
  const notifications =  listGen(notification, 10, (list) =>
    list.map((item) => ({
      ...item,
      status: status[Math.floor(Math.random() * 3 + 0)],
      rating: Math.floor(Math.random() * 5 + 1),
      target: target[Math.floor(Math.random() * 3 + 0)],
    }))
  );

  return (
    <StyledNotificationsList>
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
