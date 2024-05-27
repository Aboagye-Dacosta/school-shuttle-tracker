import PropTypes from "prop-types"
import Table from "../../ui/Table";
import TableImg from "../../ui/TableImg";
import DriversTableRowActions from "./DriversTableRowActions";

function DriversTableRow({ data: { id, image, name, email } }) {
  return (
    <Table.Row>
      <div>
        <TableImg src={image} />
      </div>
      <div>{name}</div>
      <div>{email}</div>
      <div>
        <DriversTableRowActions id={id} />
      </div>
    </Table.Row>
  );
}

DriversTableRow.propTypes = {
  data: PropTypes.object
}

export default DriversTableRow;
