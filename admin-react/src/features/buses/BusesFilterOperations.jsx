import Filter from "../../ui/Filter";
import SearchFilter from "../../ui/SearchFilter";

const searchableProps = ["destinations", "bus number"];
const filterOptions = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
];

function BusesFilterOperations() {
  return (
    <>
      <SearchFilter searchableProps={searchableProps} />
      <Filter filterIdentifier="status" options={filterOptions} />
    </>
  );
}

export default BusesFilterOperations;
