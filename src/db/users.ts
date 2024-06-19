import { database } from "../firebase";
import {
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";

interface user {
  uid: string;
  fullName: string;
  userName: string;
  email: string;
  affiliations: Array<string>
}

//create/POST user to db
const postUser = async (
  uid: string,
  fullName: string,
  userName: string,
  email: string
) => {
  const newUser: user = {
    uid: uid,
    fullName: fullName,
    userName: userName,
    email: email,
    affiliations: []
  };

  try {
    await setDoc(doc(database, "users", uid), newUser);
    console.log("user record added");
  } catch (error) {
    console.log("failed adding user to database");
  }
};

//delete user in db
const deleteUser = async (uid: string) => {
  try {
    await deleteDoc(doc(database, "users", uid));
    console.log("user was deleted");
  } catch (error) {
    console.log("failed deleting user");
  }
};

//update/PUT user fields in db
const updateUserField = async (uid: string, field: string, update: string) => {
  try {
    //get document
    const ptrDoc = doc(database, "users", uid);

    //field to update
    const updateField = {
      [field]: update,
    };

    await updateDoc(ptrDoc, updateField);
    console.log(field + " was updated with " + update);
  } catch (error) {
    console.log("failed to update user field");
  }
};

//GET user data by username
const getUsers = async (userName: string) => {
  try {
    //get collection
    const usersRef = collection(database, "users");
    let prefix;
    //uses lexicographical ordering for range queries
    const q = query(
      usersRef,
      where("username", ">=", prefix), // Starting at the prefix
      where("username", "<=", prefix + "\uf8ff"), // Ending at the prefix + unicode max
      orderBy("username") // Optionally, order results by username
    );

    //retreive results by using the query
    const querySnapshot = await getDocs(q);

    //check if anything is found
    if (querySnapshot.empty) {
      return [];
    }

    //get list of users
    // result = [{uid: uid, fullName: fullName, etc}]
    const users = querySnapshot.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    }));
    return users;
  } catch (error) {}
};

export { getUsers, updateUserField, postUser, deleteUser };