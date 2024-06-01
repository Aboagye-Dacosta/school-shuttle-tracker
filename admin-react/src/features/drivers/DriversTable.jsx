import { useSearchParams } from "react-router-dom";
import { driversData } from "../../assets/data";
import Pagination from "../../ui/Pagination";

import Table from "../../ui/Table";
import DriversTableRow from "./DriversTableRow";

function DriversTable() {
  const [searchParams, _] = useSearchParams();
  const pageSize = Number(searchParams.get("count") ?? 10);
  return (
    <Table columns="5rem 1fr 1fr 1fr">
      <Table.Header>
        <div role="row"></div>
        <div role="row">Name</div>
        <div role="row">Email</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={Array.from({ length: pageSize }, (i) => ({
          ...driversData[0],
          id: i,
        }))}
        render={(data) => <DriversTableRow data={data} />}
      />
      <Pagination count={100} />
    </Table>
  );
}

export default DriversTable;
