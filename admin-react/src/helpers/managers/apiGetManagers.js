import
    {
        get,
        ref
    } from "firebase/database";
import { query } from "firebase/firestore";
import { db } from "../../services/firebase";

export async function apiGetManagers ()
{
       try {
    const usersRef = ref(db, "users");
    let busQuery = query(usersRef);
   

    const snapshot = await get(busQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const users = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
     
      console.log(users);
      
      return users;

    } else {
      return [];
    }
  } catch (error) {
    return error;
  }
}