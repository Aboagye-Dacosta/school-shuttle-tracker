import PropTypes from "prop-types";
import Table from "../../ui/Table";
import TableImg from "../../ui/TableImg";
import DriversTableRowActions from "./DriversTableRowActions";

function DriversTableRow({
  data: { id, userImage, username, userEmail },
}) {
  return (
    <Table.Row>
      <div>
        <TableImg src={userImage} />
      </div>
      <div>{username}</div>
      <div>{userEmail}</div>
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
