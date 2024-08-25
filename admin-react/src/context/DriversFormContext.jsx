import { createContext, useContext, useState } from "react";

const DriversContext = createContext();

const useDriverContext = () => {
  const [driver, setDriver] = useState({});
  const [driverId, setDriverId] = useState("");
  const [hasDriver, setHasDriver] = useState(false);

  

  return {
    driver,
    hasDriver,
    setDriver,
    setHasDriver,
    driverId,
    setDriverId,
  };
};

export const DriversContextProvider = ({ children }) => {
  return (
    <DriversContext.Provider value={useDriverContext()}>
      {children}
    </DriversContext.Provider>
  );
};

export const useDriverCont = () => {
  const context = useContext(DriversContext);

  if (!context)
    throw new Error("using driver context outside of drive provider");

  return context;
};
