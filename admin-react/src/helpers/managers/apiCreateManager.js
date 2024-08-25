import { createUserWithEmailAndPassword } from "firebase/auth";
import { push, ref, set } from "firebase/database";
import { getDownloadURL, ref as strRef, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { auth, db, storage } from "../../services/firebase";

export async function apiCreateManager (manager)
{
    const {
        managerEmail,
        password,
        managerImage
    } = manager


  try {
    await createUserWithEmailAndPassword(auth, managerEmail, password).then(
      async () =>
      {
        let url = " ";
        const docRef = push(ref(db, "busing/users"));

        if (managerImage) {
          const storageRef = strRef(
            storage,
            `images/managers/${uuidv4()}-${managerImage.name}`
          );
          const imgRes = await uploadBytes(storageRef, managerImage);
          url = await getDownloadURL(imgRes.ref);
        }
            
        delete manager["password"]
        delete manager["confirmPassword"]

        await set(docRef, {
            ...manager,
            managerImage: url
        });

        
      }
    );
   return "success";
  } catch (error) {
    return error;
  }
}