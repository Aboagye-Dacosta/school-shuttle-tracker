import styled from "styled-components";
import Heading from "../../ui/Heading";
import NotificationsForm from "./NotificationsForm";
import NotificationsList from "./NotificationsList";

const StyledNotificationsDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1rem;
`;

export default function NotificationsDetails() {
  return (
    <>
      <Heading>Notifications</Heading>
      <StyledNotificationsDetails>
        <NotificationsForm />
        <NotificationsList />
      </StyledNotificationsDetails>
    </>
  );
}
