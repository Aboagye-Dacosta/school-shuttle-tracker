import { get, ref } from "firebase/database";
import { db } from "../../services/firebase";

export async function apiGetDriver(driverId) {
  try {
    const driverRef = ref(db, `busing/users/${driverId}`);
   const snapshot = await get(driverRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
        
      return {...data,id: driverId};

    } else {
      throw new Error("data does not exist");
    }
    
  } catch (error) {
    return error;
  }
}
