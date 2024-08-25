import { ref, set } from "firebase/database";
import { db } from "../../services/firebase";

export async function apiUpdateUser (user,userId)
{
    delete user["id"]
     try {

    const userRef = ref(db, `busing/users/${userId}`);
    await set(userRef, user );
    
    return "success";
  } catch (error) {
    return error;
  }
}