import PropTypes from "prop-types";
import Table from "../../ui/Table";
import TableImg from "../../ui/TableImg";
import Tag from "../../ui/Tag";
import BusRowActions from "./BusRowActions";

function BusTableRow({
  data: {
    id,
    busImage = "",
    busNumber = "",
    destinationOne,
    destinationTwo,
    busStatus,
  },
}) {
  return (
    <Table.Row>
      <div role="row">
        <TableImg src={busImage} />
      </div>
      <div role="row">{busNumber}</div>
      <div role="row">{busStatus}</div>
      <div role="row">
        <Tag type="grey">{destinationOne.destination}</Tag>
        <span>&mdash;</span>
        <Tag type="grey">{destinationTwo.destination}</Tag>
      </div>
      <div>
        <BusRowActions id={id} />
      </div>
    </Table.Row>
  );
}

BusTableRow.propTypes = {
  data: PropTypes.object,
};

export default BusTableRow;
