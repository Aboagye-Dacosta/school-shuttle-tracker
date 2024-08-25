import PropTypes from "prop-types";
import styled from "styled-components";
import { genDate } from "../../helpers/utils";
import Heading from "../../ui/Heading";
import SpinnerMini from "../../ui/SpinnerMini";
import Tag from "../../ui/Tag";
import { useUpdateFeedback } from "./useUpdateFeedback";

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

export default function FeedbackDetail({ feedback = {} }) {
  const {
    feedbackTitle,
    feedbackMessage,
    feedbackTarget,
    createdAt,
    feedbackRating,
    feedbackStatus,
  } = feedback;

  const { updateFeedback, isUpdatingFeedback } = useUpdateFeedback();

  
  const handleChange = (value) =>
  {
    updateFeedback({ ...feedback, feedbackStatus: value });
  };

  return (
    <>
      <Heading as="h2">Feedback</Heading>
      <StyledFeedbackDetail>
        <Heading as="h3">{feedbackTitle}</Heading>
        <p>{feedbackMessage}</p>
        <div>
          <Tag type="green">Status</Tag>
          <div>
            {isUpdatingFeedback && <SpinnerMini />}
            <label>
              <input
                type="radio"
                name="status"
                disabled={isUpdatingFeedback}
                defaultChecked={feedbackStatus === "pending"}
                onChange={() => handleChange("pending")}
              />
              <span>Pending</span>
            </label>
            <label>
              <input
                type="radio"
                name="status"
                disabled={isUpdatingFeedback}
                defaultChecked={feedbackStatus === "read"}
                onChange={() => handleChange("read")}
              />
              <span>Read</span>
            </label>
            <label>
              <input
                type="radio"
                name="status"
                disabled={isUpdatingFeedback}
                defaultChecked={feedbackStatus === "hold"}
                onChange={() => handleChange("hold")}
              />
              <span>Hod</span>
            </label>
          </div>
        </div>
        <div>
          <span>
            <Tag type={feedbackTarget == "driver" ? "blue" : "yellow"}>
              {feedbackTarget}
            </Tag>
            <Tag type="red">{feedbackRating}</Tag>
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
