import { ref, remove } from "firebase/database";
import { db } from "../../services/firebase";

export async function apiDeleteBus(busId) {
  try {
    const docRef = ref(db, `busing/buses/${busId}`);
    await remove(docRef);

    return "success";
  } catch (error) {
    return error;
  }
}
