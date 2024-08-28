import { ref, remove } from "firebase/database";
import { db } from "../../services/firebase";

export async function apiDeleteUser (userId)
{
     try {
    const docRef = ref(db, `users/${userId}`);
    await remove(docRef);

    return "success";
  } catch (error) {
    return error;
  }
}