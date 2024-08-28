import { push, ref, set } from "firebase/database";
import { getDownloadURL, ref as strRef, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../../services/firebase";

export async function apiCreateBus({
  busNumber,
  busImage,
  busStatus,
  destinationOne,
  destinationTwo,
}) {
  const docRef = push(ref(db, "buses"));
  try {
    let url = " ";

    if (busImage) {
      const storageRef = strRef(storage, `images/buses/${uuidv4()}-${busImage.name}`);
      const imgRes = await uploadBytes(storageRef, busImage);
      url = await getDownloadURL(imgRes.ref);
    }

   

    await set(docRef, {
      busNumber,
      busImage: url,
      busStatus,
      destinationOne,
      destinationTwo,
      createdAt: new Date(Date.now()).toISOString(),
    });


    return "success";
  } catch (error) {
    return error;
  }
}
