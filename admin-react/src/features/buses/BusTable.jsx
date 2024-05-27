import { busData } from "../../assets/data";
import Table from "../../ui/Table";
import BusTableRow from "./BusTableRow";

function BusTable() {
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
        data={busData}
        render={(data) => <BusTableRow data={data} />}
      />
    </Table>
  );
}

export default BusTable;
