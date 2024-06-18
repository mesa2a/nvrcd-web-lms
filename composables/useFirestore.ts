import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    addDoc,
    Timestamp
} from 'firebase/firestore';

// import { firebaseInit } from './firebaseInit';

export const useFirestore = () => {
    const db = getFirestore();

    const GetUsers = async () => {
        const q = query(
            collection(db, 'articles'),
        );
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    };

    const SetUsers = async (user) => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
              name: user,
              text: "1815",
              date: Timestamp.now()
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    };

    return {
        GetUsers,
        SetUsers,
    };
};