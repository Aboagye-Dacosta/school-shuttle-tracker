import PropTypes from "prop-types"
import { format } from "date-fns";
import styled, { css } from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

const Card = styled.div`
  background-color: var(--color-grey-0);
  padding: 2rem 3rem;
`;
const Image = styled.div`
  width: 25rem;
  /* outline: 1px solid black;
  outline-offset: 5px; */

  & img {
    background-size: cover;
    box-shadow: var(--shadow-md);
    /* object-fit:cover; */
  }
`;
const Name = styled(Heading)``;
const Sub = styled.span`
  color: var(--color-grey-500);

  & span {
    display: inline-block;
    padding: 0.7rem 1rem;
    background-color: var(--color-grey-700);
    color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    margin-right: 0.7rem;
    font-size: 1rem;
  }
`;

const StyledRow = styled(Row)`
  justify-content: start;
  width: 100%;
  gap: 1rem;

  ${(props) =>
    props.justify == "between" &&
    css`
      justify-content: space-between;
    `}
`;

function BusDataBox({bus = {}}) {
  const { busImage, busNumber, createdAt, destinationOne, destinationTwo } = bus;
 
  console.log(bus)

  return (
    <Card>
      <StyledRow type="horizontal">
        <Image>
          <img src={busImage} />
        </Image>
        <StyledRow>
          <StyledRow type="horizontal" justify="between">
            <Sub>
              <Row type="horizontal">
                <span>Bus Number</span>
                <Name>{busNumber}</Name>
              </Row>
            </Sub>
            <Sub>
              <span>created at</span>
              {format(new Date(Date.now()), "MMM dd yyyy")}
            </Sub>
          </StyledRow>{" "}
          <Sub>
            <span>Destinations</span>{" "}
            <span> {destinationOne?.destination}</span>
            &mdash;
            <span> {destinationTwo?.destination}</span>
          </Sub>
          
        </StyledRow>
      </StyledRow>
    </Card>
  );
}

BusDataBox.propTypes = {
  bus: PropTypes.object
}

export default BusDataBox;
