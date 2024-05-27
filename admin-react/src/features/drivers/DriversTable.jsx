

import {driversData} from "../../assets/data"

import Table from "../../ui/Table";
import DriversTableRow from "./DriversTableRow";



function DriversTable() {
  return (
    <Table columns="5rem 1fr 1fr 1fr">
      <Table.Header>
        <div role="row"></div>
        <div role="row">Name</div>
        <div role="row">Email</div>
        <div></div>
      </Table.Header>
      <Table.Body data={driversData} render={(data)=> <DriversTableRow data={data}/>} />
    </Table>
  );
}

export default DriversTable;
