import { ref, remove } from "firebase/database";
import { db } from "../../services/firebase";

export async function apiDeleteNotification (notificationId)
{
     try {
    const docRef = ref(db, `busing/notifications/${notificationId}`);
    await remove(docRef);

    return "success";
  } catch (error) {
    return error;
  }

}