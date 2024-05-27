import { format } from "date-fns";
import { Fragment } from "react";
import styled, { css } from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

import { busData } from "../../assets/data";



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

function BusDataBox() {
  const {
    image,
    /* id: busId, */
    driver,
    created_at,
    busNumber,
    destinations,
  } = busData[0];

  return (
    <Card>
      <StyledRow type="horizontal">
        <Image>
          <img src={image} />
        </Image>
        <StyledRow>
          <StyledRow type="horizontal" justify="between">
            <Sub>
              <Row type="horizontal">
                <span>Driver&apos;s name</span>
                <Name>{driver}</Name>
              </Row>
            </Sub>
            <Sub>
              <span>created at</span>
              {format(new Date(created_at), "MMM dd yyyy")}
            </Sub>
          </StyledRow>{" "}
          <Sub>
            <span>Destinations</span>{" "}
            {destinations.map((destination, index) => (
              <Fragment key={destination}>
                <text key={destination}> {destination}</text>
                {index !== destinations.length - 1 && <text> &mdash;</text>}
              </Fragment>
            ))}
          </Sub>{" "}
          <Sub>
            <span>Bus Number</span>
            {busNumber}
          </Sub>
        </StyledRow>
      </StyledRow>
    </Card>
  );
}

export default BusDataBox;
