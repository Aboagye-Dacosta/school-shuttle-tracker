import PropTypes from "prop-types";

import Table from "../../ui/Table";
import Tag from "../../ui/Tag";

import { genDate } from "../../helpers/utils";
import FeedbackTableActions from "./FeedbackTableActions";

function FeedbackTableRow({ data }) {
  const { id, status, rating, from, createdAt } = data;
  return (
    <Table.Row id={id}>
      <div>{from}</div>
      <div>{rating}</div>
      <div>
        <Tag
          type={
            status == "pending" ? "blue" : status == "read" ? "green" : "yellow"
          }
        >
          {status}
        </Tag>
      </div>
      <div>{genDate(createdAt)}</div>
      <div>
        <FeedbackTableActions id={id} feedback={data} />
      </div>
    </Table.Row>
  );
}

FeedbackTableRow.propTypes = {
  data: PropTypes.object,
};

export default FeedbackTableRow;
