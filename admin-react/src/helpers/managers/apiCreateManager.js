import { createUserWithEmailAndPassword } from "firebase/auth";
import { push, ref, set } from "firebase/database";
import { getDownloadURL, ref as strRef, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { auth, db, storage } from "../../services/firebase";

export async function apiCreateManager (manager)
{
    const {
        userEmail,
        password,
        userImage
    } = manager


  try {
    await createUserWithEmailAndPassword(auth, userEmail, password).then(
      async () =>
      {
        let url = " ";
        const docRef = push(ref(db, "users"));

        if (userImage) {
          const storageRef = strRef(
            storage,
            `images/managers/${uuidv4()}-${userImage.name}`
          );
          const imgRes = await uploadBytes(storageRef, userImage);
          url = await getDownloadURL(imgRes.ref);
        }
            
        delete manager["password"]
        delete manager["confirmPassword"]

        await set(docRef, {
            ...manager,
          userImage: url,
            createdAt: new Date(Date.now()).toISOString(),
        });

        
      }
    );
   return "success";
  } catch (error) {
    return error;
  }
}