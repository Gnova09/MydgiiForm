import { db, auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc, getDocs, query, setDoc } from "firebase/firestore";

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

//CREATE USER//
export async function CreateUser(email, password) {

    return await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            //console.log(user)
            return user
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            return errorMessage
        });

}

//SIGN IN//
export async function SignIn(email, password) {

    return await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            return {user}
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return {error: errorCode + errorMessage}
        });


}

//SIGN OUT//
export async function SignOutUser() {
    return await signOut(auth)
        .then(() => {
            return {
                success: true
            }
        })
        .catch((err) => {
            return {
                error: err
            }
        })
}

//AUTH STATE//
export async function authState(userFnc) {
    onAuthStateChanged(auth, userFnc)
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