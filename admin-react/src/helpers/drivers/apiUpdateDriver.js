import { ref, set } from "firebase/database";
import { getDownloadURL, ref as strRef, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../../services/firebase";

export async function apiUpdateDriver(driver, driverId) {
  try {
    let url = driver["userImage"];
    
    if (typeof driver["userImage"] == "object") {
      const storageRef = strRef(
        storage,
        `images/drivers/${uuidv4()}-${driver["userImage"].name}`
      );
      const imgRes = await uploadBytes(storageRef, driver["userImage"]);
      url = await getDownloadURL(imgRes.ref);
    }

    const driverRef = ref(db, `users/${driverId}`);
    await set(driverRef, { ...driver, userImage: url });
    
    return "success";
  } catch (error) {
    return error;
  }
}
