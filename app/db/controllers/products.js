import { db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export async function newProducts(product, uid = "") {

    try {
        const documentRef =  doc(db, 'products', uid);
        await updateDoc(documentRef, {
            products:arrayUnion(product)
        });
        console.log('Nuevo producto agregado');
    } catch (error) {
        console.error('Error al agregar el producto:', error);
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