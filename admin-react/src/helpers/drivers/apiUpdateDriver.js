import { ref, set } from "firebase/database";
import { getDownloadURL, ref as strRef, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../../services/firebase";

export async function apiUpdateDriver(driver, driverId) {
  try {
    let url = driver["driverImage"];
    
    if (typeof driver["driverImage"] == "object") {
      const storageRef = strRef(
        storage,
        `images/${uuidv4()}-${driver["driverImage"].name}`
      );
      const imgRes = await uploadBytes(storageRef, driver["driverImage"]);
      url = await getDownloadURL(imgRes.ref);
    }

    const driverRef = ref(db, `busing/users/${driverId}`);
    await set(driverRef, { ...driver, driverImage: url });
    
    return "success";
  } catch (error) {
    return error;
  }
}
