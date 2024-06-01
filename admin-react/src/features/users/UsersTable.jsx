import UsersTableRow from "./UsersTableRow";

import { usersData } from "../../assets/data";

import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";

function UsersTable() {
  return (
    <Menus>
      <Table columns="5rem 1fr 1.5fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Username</div>
          <div>Email</div>
          <div>Status</div>
          <div>Reference Num.</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={Array.from({ length: 10 }, (_,i) => ({ ...usersData[0], id: i }))}
          render={(data) => <UsersTableRow data={data} />}
        />
        <Pagination count={100} />
      </Table>
    </Menus>
  );
}

export default UsersTable;
