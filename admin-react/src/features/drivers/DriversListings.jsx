import styled from "styled-components";

import Heading from "../../ui/Heading";
import { SearchFilterProvider } from "../../ui/SearchFilter";
import DriversFilterAction from "./DriversFilterAction";
import DriversTable from "./DriversTable";

const StyledDriversListing = styled.div`
  background-color: var(--color-grey-0);
`;

const StyledList = styled.ul`
  padding: 2rem 3rem;
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.7rem;
  /* background-color: var(--color-grey-200); */
  box-shadow: var(--shadow-sm);
  padding: 2rem 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function DriversListings() {
  return (
    <div>
      <SearchFilterProvider>
        <StyledDriversListing>
          <StyledHeading as="h3">
            <span>Drivers List</span>
            <DriversFilterAction />
          </StyledHeading>
          <StyledList>
            <DriversTable />
          </StyledList>
        </StyledDriversListing>
      </SearchFilterProvider>
    </div>
  );
}

export default DriversListings;
