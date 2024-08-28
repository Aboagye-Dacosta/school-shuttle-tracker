import { createUserWithEmailAndPassword } from "firebase/auth";
import { push, ref, set } from "firebase/database";
import { getDownloadURL, ref as strRef, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { auth, db, storage } from "../../services/firebase";

export async function apiCreateDriver(driverData) {
  const {
    username,
    userImage,
    userEmail,
    driverPassword,
    busNumber,
    driverAddress,
    driverPhone,
    createdAt
  } = driverData;

  try {
    await createUserWithEmailAndPassword(auth, userEmail, driverPassword).then(
      async () =>
      {
        console.log("got here")
        let url = "";
        const docRef = push(ref(db, "users"));

        if (userImage) {
          const storageRef = strRef(
            storage,
            `images/drivers/${uuidv4()}-${userImage.name}`
          );
          const imgRes = await uploadBytes(storageRef, userImage);
          url = await getDownloadURL(imgRes.ref);
        }

        await set(docRef, {
          username,
          userImage: url,
          userEmail,
          busNumber,
          driverAddress,
          role: "driver",
          driverPhone,
          createdAt
        });

        
      }
    );
   return "success";
  } catch (error) {
    return error;
  }
}
