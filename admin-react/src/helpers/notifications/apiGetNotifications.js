import
    {
        get,
        ref
    } from "firebase/database";
import { query } from "firebase/firestore";
import { db } from "../../services/firebase";


export async function apiGetNotifications ()
{
     try {
    const notificationsRef = ref(db, `notifications`);
    let busQuery = query(notificationsRef);
   

    const snapshot = await get(busQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const notifications = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
     
      console.log(notifications);
      
      return notifications;

    } else {
      return [];
    }
  } catch (error) {
    return error;
  }
}