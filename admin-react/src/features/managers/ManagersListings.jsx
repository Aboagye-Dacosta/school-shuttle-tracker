import styled from "styled-components";

import { managersData } from "../../assets/data";
import ManagersListingItem from "./ManagersListingItem";

import Heading from "../../ui/Heading";
import { SearchFilterProvider } from "../../ui/SearchFilter";
import ManagersFilterAction from "./ManagersFilterAction";

const StyledManagersListings = styled.div`
  background-color: var(--color-grey-0);
  max-height: 100vh;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  padding: 2rem 2rem;
  max-height: 90vh;
  overflow: auto;
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  font-size: 1.7rem;
  font-weight: bold;
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  width: 100%;
`;

function genRand(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function ManagersListings() {
  return (
    <SearchFilterProvider>
      <StyledManagersListings>
        <StyledHeading as="h3">Managers Listing</StyledHeading>
        <ManagersFilterAction />
        <StyledBody>
          {Array.from({ length: 50 }, (_, i) => ({
            ...managersData[0],
            id: i,
            role: genRand(2, 0) ? "admin" : "user",
          })).map((data) => (
            <ManagersListingItem key={data.id} data={data} />
          ))}
        </StyledBody>
      </StyledManagersListings>
    </SearchFilterProvider>
  );
}

export default ManagersListings;
