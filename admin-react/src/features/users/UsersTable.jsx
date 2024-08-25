import UsersTableRow from "./UsersTableRow";

import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import { useUsers } from "./useUsers";
import LoadingPage from "../../ui/LoadindPage";

function UsersTable() {
  const { users = [], isLoadingUsers } = useUsers();
  return (
    <>
      {isLoadingUsers && <LoadingPage />}
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
          data={users}
          render={(data) => <UsersTableRow data={data} />}
        />
        <Pagination count={users?.length ?? 0} />
      </Table>
    </Menus>
    </>
  );
}

export default UsersTable;
