import { db, auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { arrayUnion, collection, doc, getDoc, getDocs, query, setDoc, updateDoc } from "firebase/firestore";


export async function getUserByUid(uid) {
    try {
        const userDocRef = doc(db, "users", uid);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
            const user = docSnap.data();
            return user;
        } else {
            console.log('El documento no existe.');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener el documento:', error);
        return null;
    }
}

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
export async function CreateUser({ email, password, name, rnc = "" }) {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const reference = doc(db, "users", user.uid);
        const forms = doc(db, "forms", user.uid);
        const products = doc(db, "products", user.uid);

        await setDoc(reference, {
            email,
            rnc,
            name,
            proveedor: []
        })
        await setDoc(forms, {
            forms606: [],
            forms607: []
        })
        await setDoc(products, {products:[]})

        console.log('Nuevo usuario creado con ID:', user.uid);
        return { user: { ...user, rnc } };
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        return { error: null };
    }

}

//SIGN IN//
export async function SignIn(email, password) {

    try {
        const userSign = await signInWithEmailAndPassword(auth, email, password)
        // Signed in
        return userSign.user

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { error: errorCode + errorMessage }
    }



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

export async function newForm606(form, uid = "") {

    try {
        const documentRef = doc(db, 'forms', uid);
        await updateDoc(documentRef, {
            forms606: arrayUnion(form)
        });
        console.log('Nuevo formulario agregado al arreglo forms606');
    } catch (error) {
        console.error('Error al agregar el formulario:', error);
    }

}

export async function getForm606(uid) {

    try {
        const documentRef = doc(db, 'forms', uid);
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
            const data = []
            let n = 1
            const formdata =documentSnapshot.data()
            
            formdata.forms606.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                data.push({ ...doc, id: n++ })
            });
            return (data)
        } else {
            console.log('El formulario no existe');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener el formulario:', error);
        return null;
    }



}