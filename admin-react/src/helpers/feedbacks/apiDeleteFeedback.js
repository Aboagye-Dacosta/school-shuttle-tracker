import { ref, remove } from "firebase/database";
import { db } from "../../services/firebase";

export async function apiDeleteFeedback (feedbackId)
{
    
 
  try {
    const docRef = ref(db, `busing/feedbacks/${feedbackId}`);
    await remove(docRef);

    return "success";
  } catch (error) {
    return error;
  }

}