import { ref, set } from "firebase/database";
import { getDownloadURL, ref as strRef, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../../services/firebase";

export async function apiUpdateBus(bus, busId) {
  try {
    let url = bus["busImage"];
    
    if (typeof bus["busImage"] == "object") {
      const storageRef = strRef(
        storage,
        `images/${uuidv4()}-${bus["busImage"].name}`
      );
      const imgRes = await uploadBytes(storageRef, bus["busImage"]);
      url = await getDownloadURL(imgRes.ref);
    }

    const busRef = ref(db, `buses/${busId}`);
    await set(busRef, { ...bus, busImage: url });
    
    return "success";
  } catch (error) {
    return error;
  }
}
