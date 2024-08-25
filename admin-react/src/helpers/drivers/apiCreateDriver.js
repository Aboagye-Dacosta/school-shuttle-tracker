import { createUserWithEmailAndPassword } from "firebase/auth";
import { push, ref, set } from "firebase/database";
import { getDownloadURL, ref as strRef, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { auth, db, storage } from "../../services/firebase";

export async function apiCreateDriver(driverData) {
  const {
    driverName,
    driverImage,
    driverEmail,
    driverPassword,
    busNumber,
    driverAddress,
    driverPhone,
  } = driverData;

  try {
    await createUserWithEmailAndPassword(auth, driverEmail, driverPassword).then(
      async () =>
      {
        console.log("got here")
        let url = " ";
        const docRef = push(ref(db, "busing/users"));

        if (driverImage) {
          const storageRef = strRef(
            storage,
            `images/drivers/${uuidv4()}-${driverImage.name}`
          );
          const imgRes = await uploadBytes(storageRef, driverImage);
          url = await getDownloadURL(imgRes.ref);
        }

        await set(docRef, {
          driverName,
          driverImage: url,
          driverEmail,
          busNumber,
          driverAddress,
          role: "driver",
          driverPhone,
        });

        
      }
    );
   return "success";
  } catch (error) {
    return error;
  }
}
