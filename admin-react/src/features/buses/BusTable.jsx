import { useSearchParams } from "react-router-dom";
import { busData } from "../../assets/data";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import BusTableRow from "./BusTableRow";

function BusTable() {
  const [searchParams] = useSearchParams();
  const pageSize = Number(searchParams.get("count") ?? 10);
  return (
    <Table columns="1fr 2fr 2fr 3fr 3fr">
      <Table.Header>
        <div role="row"></div>
        <div role="row">Bus Number</div>
        <div role="row">Status</div>
        <div role="row">Destinations</div>
        <div role="row"></div>
      </Table.Header>
      <Table.Body
        data={Array.from({ length: pageSize }, (i) => ({
          ...busData[0],
          id: i,
        }))}
        render={(data) => <BusTableRow data={data} />}
      />
      <Pagination count={100} />
    </Table>
  );
}

export default BusTable;
