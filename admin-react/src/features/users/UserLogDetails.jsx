import styled from "styled-components";

import { format } from "date-fns";
import Table from "../../ui/Table";

const StyledUserLogDetails = styled.div`
  /* padding: 1rem; */
`;

function UserLogDetails() {
  return (
    <StyledUserLogDetails>
      <Table columns="1fr 1fr">
        <Table.Row>
          <div>User</div>
          <div>Jones Edga</div>
        </Table.Row>
        <Table.Row>
          <div>Driver</div>
          <div>Chiles Fine</div>
        </Table.Row>
        <Table.Row>
          <div>Bus Number</div>
          <div>239839w</div>
        </Table.Row>
        <Table.Row>
          <div>Created At</div>
          <div> {format(new Date(), "MMM dd yyyy")}</div>
        </Table.Row>
      </Table>
    </StyledUserLogDetails>
  );
}

export default UserLogDetails;
