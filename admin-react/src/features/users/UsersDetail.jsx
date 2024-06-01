import { useUser } from "../../context/UsersContext";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { SearchFilterProvider } from "../../ui/SearchFilter";

import UserLogs from "./UserLogs";
import UsersFilterOperations from "./UsersFilterOperations";
import UsersLayout from "./UsersLayout";
import UsersListing from "./UsersListing";

function UsersDetail() {
  const { toggleLog } = useUser();
  return (
    <SearchFilterProvider>
      <Row type="horizontal">
        <Heading>Users</Heading>
        <Row type="horizontal">
          <UsersFilterOperations />
        </Row>
      </Row>
      <UsersLayout>
        <UsersListing />
        {toggleLog && (
          <div>
            <UserLogs />
          </div>
        )}
      </UsersLayout>
    </SearchFilterProvider>
  );
}

export default UsersDetail;
