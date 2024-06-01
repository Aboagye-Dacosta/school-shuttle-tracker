import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function useUserContext() {
  const [toggleLog, setToggleLog] = useState(false);
  const [userId, setUserId] = useState("");

  const openLog = () => {
    setToggleLog(true);
  };
  const closeLog = () => {
    setToggleLog(false);
  };

  return {
    toggleLog,
    userId,
    openLog,
    closeLog,
    setUserId,
  };
}

function UsersContextProvider({ children }) {
  return (
    <UserContext.Provider value={useUserContext()}>
      {children}
    </UserContext.Provider>
  );
}

UsersContextProvider.propTypes = {
  children: PropTypes.any,
};

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const context = useContext(UserContext);

  if (!context)
    throw new Error("user context is being used outside of user provider");

  return context;
}

export default UsersContextProvider;
