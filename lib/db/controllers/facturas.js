import { db } from "../firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";

export async function newFactura({factura, uid = ""}) {

    try {
        const documentRef =  doc(db, 'facturas', uid);
        await updateDoc(documentRef, {
            facturas:arrayUnion(factura)
        });
        console.log('Nueva factura agregado');
    } catch (error) {
        console.error('Error al agregar el factura:', error);
    }

}

export async function getFacturas(uid="") {

    try {
        const documentRef = doc(db, 'facturas', uid);
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
            const data = []
            let n = 1
            const mdata =documentSnapshot.data()
            
            mdata.facturas.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                data.push({ ...doc, id: n++ })
            });
            return (data)
        } else {
            console.log('Las facturas no existe');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener los facturas:', error);
        return null;
    }

}