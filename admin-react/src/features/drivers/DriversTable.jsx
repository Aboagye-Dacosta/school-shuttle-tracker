import LoadingPage from "../../ui/LoadindPage";
import Pagination from "../../ui/Pagination";

import Table from "../../ui/Table";
import DriversTableRow from "./DriversTableRow";
import { useDriversData } from "./useDriversData";

function DriversTable() {
  const { drivers = [], isLoadingDrivers } = useDriversData();

  return (
    <>
      {isLoadingDrivers && <LoadingPage />}
      <Table columns="5rem 1fr 1fr 1fr">
        <Table.Header>
          <div role="row"></div>
          <div role="row">Name</div>
          <div role="row">Email</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={drivers}
          render={(data) => <DriversTableRow data={data} />}
        />
        <Pagination count={drivers?.length ?? 0} />
      </Table>
    </>
  );
}

export default DriversTable;
