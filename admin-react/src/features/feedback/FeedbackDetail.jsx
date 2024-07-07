import PropTypes from "prop-types";
import styled from "styled-components";
import { genDate } from "../../helpers/utils";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";

const StyledFeedbackDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > *:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
    padding: 1rem 0;
    justify-content: start;
  }

  & > *,
  & > * > *,
  & label {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > :last-child {
    justify-content: space-between;
  }
`;

export default function FeedbackDetail({
  feedback: { title, message, from, userType, createdAt, rating, status },
}) {
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <Heading as="h2">Feedback</Heading>
      <StyledFeedbackDetail>
        <Heading as="h3">{title}</Heading>
        <p>{message}</p>
        <div>
          <Tag type="green">From</Tag>
          <span>{from}</span>
        </div>
        <div>
          <Tag type="green">Status</Tag>
          <div>
            <label>
              <input
                type="radio"
                name="status"
                checked={status === "pending"}
                onChange={() => handleChange("pending")}
              />
              <span>Pending</span>
            </label>
            <label>
              <input
                type="radio"
                name="status"
                checked={status === "read"}
                onChange={() => handleChange("read")}
              />
              <span>Read</span>
            </label>
            <label>
              <input
                type="radio"
                name="status"
                checked={status === "hold"}
                onChange={() => handleChange("hold")}
              />
              <span>Hod</span>
            </label>
          </div>
        </div>
        <div>
          <span>
            <Tag type={userType == "driver" ? "blue" : "yellow"}>
              {userType}
            </Tag>
            <Tag type="red">{rating}</Tag>
          </span>
          <span>{genDate(createdAt)}</span>
        </div>
      </StyledFeedbackDetail>
    </>
  );
}

FeedbackDetail.propTypes = {
  feedback: PropTypes.object,
};
