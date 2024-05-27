import { format } from "date-fns";
import styled, { css } from "styled-components";

import Heading from "../../ui/Heading";

import { driversData } from "../../assets/data";
import Table from "../../ui/Table";

const Card = styled.div`
  background-color: var(--color-grey-0);
  padding: 2rem 3rem;
`;
const Image = styled.div`
  display: flex;
  padding: 2rem 3rem;
  /* align-items: center; */
  /* justify-content: center; */

  /* outline: 1px solid black;
  outline-offset: 5px; */
  background-color: var(--color-grey-0);

  & img {
    object-fit: cover;
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

const StyledDriverDataBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  gap: 2rem;

  ${(props) =>
    props.justify == "between" &&
    css`
      justify-content: space-between;
    `}
`;

function DriverDataBox() {
  const {
    image,
    /* id: busId, */
    name,
    created_at,
    email,
    address,
    tel,
    busNumber,
  } = driversData[0];

  return (
      <StyledDriverDataBox>
          
      <Image>
        <img src={image} />
      </Image>
      <Card>
        <Table columns="1fr 1fr" >
          <Table.Row type="horizontal" justify="between">
            <Sub>
              <span>Driver&apos;s name</span>
            </Sub>
            <Name>{name}</Name>
          </Table.Row>
          <Table.Row>
            <Sub>
              <span>Email</span>
            </Sub>
            <text>{email}</text>
          </Table.Row>
          <Table.Row>
            <Sub>
              <span>Address</span>
            </Sub>
            <text>{address}</text>
          </Table.Row>
          <Table.Row>
            <Sub>
              <span>Telephone</span>
            </Sub>
            <text>{tel}</text>
          </Table.Row>
          <Table.Row>
            <Sub>
              <span>Bus Number</span>
            </Sub>
            {busNumber}
          </Table.Row>
          <Table.Row>
            <Sub>
              <span>created at</span>
            </Sub>
            {format(new Date(created_at), "MMM dd yyyy")}
          </Table.Row>
        </Table>
      </Card>
    </StyledDriverDataBox>
  );
}

export default DriverDataBox;
