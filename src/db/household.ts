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

const databaseName: string = "households";

//create/POST house to db
const postHousehold = async (uid: string, name: string) => {
  const newHouseHold = {
    uid: uid,
    name: name,
  };

  try {
    await setDoc(doc(database, databaseName, uid), newHouseHold);
    console.log("house has been created");
  } catch (error) {
    console.log("failed to create house");
  }
};

//delete household from database
const deleteHousehold = async (uid: string) => {
  try {
    await deleteDoc(doc(database, databaseName, uid));
    console.log("household was deleted");
  } catch (error) {
    console.log("failed deleting house");
  }
};

//update/PUT household fields in db
const updateHouseholdField = async (
  uid: string,
  field: string,
  update: string
) => {
  try {
    //get the document
    const ptrDoc = doc(database, databaseName, uid);

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

//GET household data by name
const getHousehold = async (name: string) => {
  try {
    //get collection
    const householdRef = collection(database, databaseName);
    let prefix;
    //uses lexicographical ordering for range queries
    const q = query(
      householdRef,
      where("name", ">=", prefix), // Starting at the prefix
      where("name", "<=", prefix + "\uf8ff"), // Ending at the prefix + unicode max
      orderBy("name") // Optionally, order results by name
    );

    //retreive results by using the query
    const querySnapshot = await getDocs(q);

    //check if anything is found
    if (querySnapshot.empty) {
      return [];
    }

    //get list of users
    // result = [{uid: uid, fullName: fullName, etc}]
    const households = querySnapshot.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    }));
    return households;
  } catch (error) {}
};

export { getHousehold, updateHouseholdField, postHousehold, deleteHousehold };
