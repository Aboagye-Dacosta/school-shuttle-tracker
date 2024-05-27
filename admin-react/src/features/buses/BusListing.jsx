import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import BusTable from "./BusTable";

function BusListing() {
  return (
    <>
      <Row type="horizontal">
        <Heading >Bus Listings</Heading>
      </Row>
      <BusTable />
      <Row type="horizontal">
        <Button>Add a driver</Button>
      </Row>
    </>
  );
}

export default BusListing;
