import {
    equalTo,
    get,
    limitToFirst,
    ref
} from "firebase/database";
import { query } from "firebase/firestore";
import { db } from "../../services/firebase";

export async function apiGetBuses (pageCount, page, status)
{

  try {
    const busesRef = ref(db, "busing/buses");
    let busQuery;

    if (status == "all") {
      busQuery = query(busesRef, limitToFirst(pageCount));
    } else
    {
      console.log("entered here -----")
      busQuery = query(
        busesRef,
        equalTo(status,"busStatus"),
        // where("busStatus","==",status),
        limitToFirst(pageCount),
      );
    }

    const snapshot = await get(busQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const buses = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
     
      console.log(buses);
      
      return buses;

    } else {
      return [];
    }
  } catch (error) {
    return error;
  }
}
