import SearchFilter from "../../ui/SearchFilter";

const searchableProps = ["name", "email"];
function DriversFilterAction() {
  return (
    <>
      <SearchFilter searchableProps={searchableProps} />
    </>
  );
}

export default DriversFilterAction;
