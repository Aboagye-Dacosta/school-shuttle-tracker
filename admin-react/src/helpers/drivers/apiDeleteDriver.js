import { ref, remove } from "firebase/database";
import { db } from "../../services/firebase";

export async function apiDeleteDriver (driverId)
{
 
  try {
    const docRef = ref(db, `busing/users/${driverId}`);
    await remove(docRef);

    return "success";
  } catch (error) {
    return error;
  }
}
