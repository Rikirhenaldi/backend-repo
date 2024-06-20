import { db } from '../config/firebaseConfig';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';

const userCollection = collection(db, 'users');

export const getUserById = async (id: string) => {
    const userDoc = doc(userCollection, id);
    const userSnapshot = await getDoc(userDoc);

    if (!userSnapshot.exists()) {
        return null;
    }

    return userSnapshot.data();
};

export const updateUserById = async (id: string, data: any) => {
    const userDoc = doc(userCollection, id);
    await updateDoc(userDoc, data);
    const updatedSnapshot = await getDoc(userDoc);

    return updatedSnapshot.data();
};
