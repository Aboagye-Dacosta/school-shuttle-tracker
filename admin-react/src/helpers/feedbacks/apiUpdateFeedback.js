import { ref, set } from "firebase/database";
import { db } from "../../services/firebase";

export async function apiUpdateFeedback ( feedbackId,feedback )
{
    console.log(feedback,"-----------------------")
    try
    {
        delete feedback["id"];
    const userRef = ref(db, `busing/feedbacks/${feedbackId}`);
    await set(userRef, feedback);

    return "success";
  } catch (error) {
    return error;
  }
}
