// firestoreDB.js

import { firestore } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

class DB {
  constructor() {
    this.db = firestore;
  }

  async addNewUser(data) {
    try {
      const docRef = await addDoc(collection(this.db, "users"), data);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  }
}

export default new DB();
