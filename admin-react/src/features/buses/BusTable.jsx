import LoadingPage from "../../ui/LoadindPage";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import BusTableRow from "./BusTableRow";
import { useBuses } from "./useBuses";

function BusTable() {
  const { buses, isLoadingBuses } = useBuses();

  return (
    <>
      {isLoadingBuses && <LoadingPage />}
      <Table columns="1fr 2fr 2fr 3fr 3fr">
        <Table.Header>
          <div role="row"></div>
          <div role="row">Bus Number</div>
          <div role="row">Status</div>
          <div role="row">Destinations</div>
          <div role="row"></div>
        </Table.Header>
        <Table.Body
          data={buses}
          render={(data) => <BusTableRow data={data} />}
        />
        <Pagination count={buses?.length} />
      </Table>
    </>
  );
}

export default BusTable;
