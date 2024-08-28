import { format } from "date-fns";
import styled, { css } from "styled-components";

import Heading from "../../ui/Heading";

import { useParams } from "react-router-dom";
import Table from "../../ui/Table";
import { useDriver } from "./useDriver";
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
  const { id } = useParams();
  const { driver = {} } = useDriver(id);

  const {
    username,
    userImage,
    userEmail,
    busNumber,
    driverAddress,
    driverPhone,
  } = driver;

  return (
    <StyledDriverDataBox>
      <Image>
        <img src={userImage} />
      </Image>
      <Card>
        <Table columns="1fr 1fr">
          <Table.Row type="horizontal" justify="between">
            <Sub>
              <span>Driver&apos;s name</span>
            </Sub>
            <Name>{username}</Name>
          </Table.Row>
          <Table.Row>
            <Sub>
              <span>Email</span>
            </Sub>
            <text>{userEmail}</text>
          </Table.Row>
          <Table.Row>
            <Sub>
              <span>Address</span>
            </Sub>
            <text>{driverAddress}</text>
          </Table.Row>
          <Table.Row>
            <Sub>
              <span>Telephone</span>
            </Sub>
            <text>{driverPhone}</text>
          </Table.Row>
          <Table.Row>
            <Sub>
              <span>Bus Number</span>
            </Sub>
            {busNumber["value"]}
          </Table.Row>
          <Table.Row>
            <Sub>
              <span>created at</span>
            </Sub>
            {format(new Date(Date.now()), "MMM dd yyyy")}
          </Table.Row>
        </Table>
      </Card>
    </StyledDriverDataBox>
  );
}

export default DriverDataBox;
