import UsersContextProvider from "../context/UsersContext";
import UsersDetail from "../features/users/UsersDetail";

function Users() {
  return (
    <UsersContextProvider>
      <UsersDetail />
    </UsersContextProvider>
  );
}

export default Users;
