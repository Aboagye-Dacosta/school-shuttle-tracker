import DriversForm from "./DriversForm";
import DriversLayout from "./DriversLayout";

import Heading from "../../ui/Heading";
import DriversListings from "./DriversListings";

function DriversDetail() {
  return (
    <>
      <Heading> Drivers </Heading>
      <DriversLayout>
        <div>
        <DriversForm />
        </div>
        <DriversListings />
      </DriversLayout>
    </>
  );
}

export default DriversDetail;
