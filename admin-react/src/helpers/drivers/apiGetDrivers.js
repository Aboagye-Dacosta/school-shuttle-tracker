import
  {
    get,
    ref
  } from "firebase/database";
import { query } from "firebase/firestore";
import { db } from "../../services/firebase";

export async function apiGetDrivers ()
{

  try {
    const driversRef = ref(db, "users");
    let busQuery = query(driversRef);
   

    const snapshot = await get(busQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const drivers = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
     
      console.log(drivers);
      
      return drivers;

    } else {
      return [];
    }
  } catch (error) {
    return error;
  }
}
