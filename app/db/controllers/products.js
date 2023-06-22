export async function newProducts(product, uid = "") {

    try {
        const documentRef = doc(db, 'products', uid);
        await updateDoc(documentRef, arrayUnion(product));
        console.log('Nuevo formulario agregado al arreglo forms606');
    } catch (error) {
        console.error('Error al agregar el formulario:', error);
    }

}