import SearchFilter from "../../ui/SearchFilter"

const searchableProps = ["name","email","role"]
function ManagersFilterAction() {
  return (
    <>
      <SearchFilter searchableProps={searchableProps} />
    </>
  );
}

export default ManagersFilterAction