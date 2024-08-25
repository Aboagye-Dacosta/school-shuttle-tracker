import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import { SearchFilterProvider } from "../../ui/SearchFilter";
import BusesFilterOperations from "./BusesFilterOperations";
import BusTable from "./BusTable";
import CreateBusForm from "./CreateBusForm";

function BusListing() {
  return (
    <>
      <SearchFilterProvider>
        <Row type="horizontal">
          <Heading>Bus Listings</Heading>
          <Row type="horizontal">
            <BusesFilterOperations />
          </Row>
        </Row>
        <BusTable />
        <Modal>
          <Row type="horizontal">
            <Modal.Open opens="create-bus">
              <Button>Add a Bus</Button>
            </Modal.Open>

            <Modal.Window name={`create-bus`}>
              <CreateBusForm />
            </Modal.Window>
          </Row>
        </Modal>
      </SearchFilterProvider>
    </>
  );
}

export default BusListing;
