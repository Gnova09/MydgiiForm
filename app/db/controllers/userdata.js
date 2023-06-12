import { db } from "../firebase";
import { addDoc, collection, doc, getDocs, query, setDoc } from "firebase/firestore"

export function newUser(name, email, pass) {

    const reference = doc(db, "users", email);

    setDoc(reference, {
        username: name,
        email,
        pass
    })
        .then((docRef) => {
            console.log('Nuevo usuario creado con ID:', docRef.id);
        })
        .catch((error) => {
            console.error('Error al crear el usuario:', error);
        });

}

export function newClient(rnc, name) {

    const reference = doc(db, "client", rnc);

    setDoc(reference, {
        rnc,
        name
    })
        .then((docRef) => {
            console.log('Nuevo cliente creado con ID:', docRef.id);
        })
        .catch((error) => {
            console.error('Error al crear el cliente:', error);
        });

}

export function newForm606(form) {

    const collectionRef = collection(db, 'forms606');

    addDoc(collectionRef, form)
        .then((docRef) => {
            console.log('Nuevo formulario creado con ID:', docRef.id);
        })
        .catch((error) => {
            console.error('Error al crear el formulario:', error);
        });
}

export async function getForm606() {

    const q = query(collection(db, "forms606"));

    const querySnapshot = await getDocs(q);
    const data = []
    let n = 1
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push({ ...doc.data(), id: n++ })
    });
    return (data)

}