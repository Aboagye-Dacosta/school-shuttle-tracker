import { signInWithEmailAndPassword } from "firebase/auth";
import { apiGetUserByEmail } from "../helpers/users/apiGetUser";
import { auth } from "./firebase";

export async function login({ email:mail, password }) {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      mail,
      password
    );
      const authUser = userCredentials.user;
      const {
          email
      } = authUser;
      

      if (email == mail)
      {
          const user = await apiGetUserByEmail(email) 
          return user;
      }
    return authUser;
  } catch (error) {
    return error;
  }
}

export async function logout ()
{
    
}
