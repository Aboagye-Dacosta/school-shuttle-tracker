import
    {
        get,
        ref
    } from "firebase/database";
import { query } from "firebase/firestore";
import { db } from "../../services/firebase";

export async function apiGetFeedbacks ()
{
      try {
    const feedbacksRef = ref(db, "feedbacks");
    let busQuery = query(feedbacksRef);
   

    const snapshot = await get(busQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const feedbacks = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
     
      console.log(feedbacks);
      
      return feedbacks;

    } else {
      return [];
    }
  } catch (error) {
    return error;
  }
}