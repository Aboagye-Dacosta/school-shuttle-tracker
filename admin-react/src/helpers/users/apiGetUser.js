import { get, query, ref } from "firebase/database";
import { db } from "../../services/firebase";

export async function apiGetUser(userId) {
  try {
    const busRef = ref(db, `users/${userId}`);
    const snapshot = await get(busRef);

    if (snapshot.exists()) {
      const data = snapshot.val();

      return { ...data, id: userId };
    } else {
      throw new Error("data does not exist");
    }
  } catch (error) {
    return error;
  }
}

export async function apiGetUserByEmail(email) {
  // try {
  //   const busRef = ref(db, `busing/users`);
  //   const q = query(busRef, where("managerEmail", "==", email));
  //   const snapshot = await get(q);

  //   if (snapshot.exists()) {
  //     const data = snapshot.val();

  //     return { ...data };
  //   } else {
  //     throw new Error("data does not exist");
  //   }
  // } catch (error) {
  //   return error;
  // }


   try {
    const usersRef = ref(db, "users");
    let busQuery = query(usersRef);

    const snapshot = await get(busQuery);

     if (snapshot.exists())
     {
       const data = snapshot.val();
       const user = Object.keys(data).map((key) => ({ id: key, ...data[key] })).find(user=>Object.values(user).includes(email));
     
       console.log(user);
      
       return user;
     }
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
}

  // const usersRef = collection(db, 'busing/users');
  //   const q = query(usersRef, where("managerEmail", "==", email));
  //   const querySnapshot = await getDocs(q);

  //   if (!querySnapshot.empty) {
  //     const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //     return data;
  //   } else {
  //     throw new Error("Data does not exist");
  //   }
