
import { get, ref } from "firebase/database";
import { db } from "../../services/firebase";

export async function apiGetNotification (notificationId)
{
     try {
    const notificationRef = ref(db, `busing/notifications/${notificationId}`);
   const snapshot = await get(notificationRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
        
      return {...data,id: notificationId};

    } else {
      throw new Error("data does not exist");
    }
    
  } catch (error) {
    return error;
  }
}