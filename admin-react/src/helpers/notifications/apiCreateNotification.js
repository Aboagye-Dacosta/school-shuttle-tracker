import { push, ref, set } from "firebase/database";
import { db } from "../../services/firebase";
export async function apiCreateNotification({
  notificationTitle,
  notificationMessage,
    notificationTarget,
  createdAt
}) {
  const docRef = push(ref(db, "notifications"));
  try {
    await set(docRef, {
      notificationTitle,
      notificationMessage,
        notificationTarget,
      createdAt
    });

    return "success";
  } catch (error) {
    return error;
  }
}
