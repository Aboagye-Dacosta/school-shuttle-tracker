import PropTypes from "prop-types";

import Table from "../../ui/Table";
import Tag from "../../ui/Tag";

import { genDate } from "../../helpers/utils";
import FeedbackTableActions from "./FeedbackTableActions";

function FeedbackTableRow({ data }) {
  const { id, feedbackStatus, feedbackRating, feedbackTarget, createdAt } = data;
  return (
    <Table.Row id={id}>
      <div>{feedbackTarget}</div>
      <div>{feedbackRating}</div>
      <div>
        <Tag
          type={
            feedbackStatus == "pending"
              ? "blue"
              : feedbackStatus == "read"
              ? "green"
              : "yellow"
          }
        >
          {feedbackStatus}
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
