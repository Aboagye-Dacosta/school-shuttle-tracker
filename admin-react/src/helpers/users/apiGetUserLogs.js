import
  {
    get,
    ref
  } from "firebase/database";
import { query } from "firebase/firestore";
import { db } from "../../services/firebase";

export async function apiGetUserLogs ({userId})
{

  try {
    const userLogsRef = ref(db, `busing/userLogs/${userId}`);
    let busQuery = query(userLogsRef);
   

    const snapshot = await get(busQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const userLogs = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
     
      console.log(userLogs);
      
      return userLogs;

    } else {
      return [];
    }
  } catch (error) {
    return error;
  }
}
