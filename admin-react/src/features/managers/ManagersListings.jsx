import styled from "styled-components";

import ManagersListingItem from "./ManagersListingItem";

import Heading from "../../ui/Heading";
import { SearchFilterProvider } from "../../ui/SearchFilter";
import Spinner from "../../ui/Spinner";
import ManagersFilterAction from "./ManagersFilterAction";
import { useManagers } from "./useManagers";

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

function ManagersListings() {
  const { managers = [], isLoadingManagers } = useManagers();
  return (
    <SearchFilterProvider>
      <StyledManagersListings>
        <StyledHeading as="h3">Managers Listing</StyledHeading>
        <ManagersFilterAction />
        <StyledBody>
          {isLoadingManagers ? (
            <Spinner />
          ) : (
            managers.map((data) => (
              <ManagersListingItem key={data.id} data={data} />
            ))
          )}
        </StyledBody>
      </StyledManagersListings>
    </SearchFilterProvider>
  );
}

export default ManagersListings;
