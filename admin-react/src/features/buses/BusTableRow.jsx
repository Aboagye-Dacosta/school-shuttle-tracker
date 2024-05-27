import PropTypes from "prop-types";
import { Fragment } from "react";
import Table from "../../ui/Table";
import TableImg from "../../ui/TableImg";
import Tag from "../../ui/Tag";
import BusRowActions from "./BusRowActions";

function BusTableRow({
  data: { id, image = "", busNumber = "", destinations = [], status },
}) {
  return (
    <Table.Row>
      <div role="row">
        <TableImg src={image} />
      </div>
      <div role="row">{busNumber}</div>
      <div role="row">{status}</div>
      <div role="row">
        {destinations.map((destination, index) => (
          <Fragment key={destination}>
            <Tag type="grey" key={destination}>
              {destination}
            </Tag>
            {index !== destinations.length - 1 && <span>&mdash;</span>}
          </Fragment>
        ))}
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
