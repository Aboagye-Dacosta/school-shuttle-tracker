import { get, ref } from "firebase/database";
import { db } from "../../services/firebase";

export async function apiGetBus(busId) {
  try {
    const busRef = ref(db, `busing/buses/${busId}`);
   const snapshot = await get(busRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
        
      return {...data,id: busId};

    } else {
      throw new Error("data does not exist");
    }
    
  } catch (error) {
    return error;
  }
}
