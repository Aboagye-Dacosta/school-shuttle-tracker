import styled from "styled-components";
import Heading from "../../ui/Heading";
import ManagersForm from "./ManagersForm";
import ManagersLayout from "./ManagersLayout";
import ManagersListings from "./ManagersListings";

const StyledManagersDetail = styled.div``;
function ManagersDetail() {
  return (
    <>
      <Heading>Managers</Heading>
      <StyledManagersDetail>
        <ManagersLayout>
          <ManagersForm />
          <div>
            <ManagersListings />
          </div>
        </ManagersLayout>
      </StyledManagersDetail>
    </>
  );
}

export default ManagersDetail;
