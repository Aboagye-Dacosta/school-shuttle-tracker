import Filter from "../../ui/Filter";
import SearchFilter from "../../ui/SearchFilter";

const searchableProps = ["username", "reference number"];
const filterOptions = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Blocked",
    value: "blocked",
  },
];

function UsersFilterOperations() {
  return (
    <>
      <SearchFilter searchableProps={searchableProps} />
      <Filter filterIdentifier="status" options={filterOptions} />
    </>
  );
}

export default UsersFilterOperations;
