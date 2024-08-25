import PropTypes from "prop-types";
import Table from "../../ui/Table";
import TableImg from "../../ui/TableImg";
import DriversTableRowActions from "./DriversTableRowActions";

function DriversTableRow({
  data: { id, driverImage, driverName, driverEmail },
}) {
  return (
    <Table.Row>
      <div>
        <TableImg src={driverImage} />
      </div>
      <div>{driverName}</div>
      <div>{driverEmail}</div>
      <div>
        <DriversTableRowActions id={id} />
      </div>
    </Table.Row>
  );
}

DriversTableRow.propTypes = {
  data: PropTypes.object,
};

export default DriversTableRow;
