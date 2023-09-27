import { db } from "../firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";


export async function newProducts(product, uid = "") {

    try {
        const documentRef = doc(db, 'products', uid);
        await updateDoc(documentRef, {
            products: arrayUnion(product)
        });
        console.log('Nuevo producto agregado');
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }

}

export async function getProducts(uid = "") {

    try {
        const documentRef = doc(db, 'products', uid);
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
            const data = []
            let n = 1
            const mdata = documentSnapshot.data()

            mdata.products.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                data.push({ ...doc, id: n++ })
            });
            return (data)
        } else {
            console.log('Los productos no existe');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return null;
    }

}

export async function deleteProducts({ uid, indice }) {

    try {
        const documentRef = doc(db, 'products', uid);
        const product = await getDoc(documentRef);
        const products = product.data().products;

        if (product.exists()) {

            if (indice >= 0 && indice < products.length) {
                // Eliminar el objeto proveedor utilizando splice()
                products.splice(indice, 1);

                // Actualizar el documento del usuario con el nuevo arreglo de proveedores
                await updateDoc(documentRef, { products })
                console.log('producto eliminado exitosamente.')
                return "done"
            } else {
                console.log('El índice es inválido.');
            }

        } else {
            console.log('Los productos no existe');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return null;
    }

}

