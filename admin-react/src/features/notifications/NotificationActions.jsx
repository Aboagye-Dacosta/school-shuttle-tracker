import styled from "styled-components";
import Filter from "../../ui/Filter";

const StyledNotificationActions = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

const filterOptionsTarget = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Student",
    value: "student",
  },
  {
    label: "Driver",
    value: "driver",
  },
];
// const filterOptionsStatus = [
//   {
//     label: "Pending",
//     value: "pending",
//   },
//   {
//     label: "Hold",
//     value: "hold",
//   },
//   {
//     label: "Read",
//     value: "read",
//   },
// ];
export default function NotificationActions() {
  return (
    <StyledNotificationActions>
      <span>Filter By</span>
      <Filter filterIdentifier="target" options={filterOptionsTarget} />
      {/* <Filter filterIdentifier="status" options={filterOptionsStatus} /> */}
    </StyledNotificationActions>
  );
}
