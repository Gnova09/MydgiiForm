import { db, auth } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";


export async function newProveedor({ uid, name, rnc, tipoID, desc }) {

  try {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const newProveedor = { name, rnc, tipoID, desc };

      // Agregar el nuevo proveedor al arreglo de proveedores del usuario
      if (userData.proveedores) {
        userData.proveedores.push(newProveedor);
      } else {
        userData.proveedores = [newProveedor];
      }

      // Actualizar el documento del usuario con los nuevos proveedores
      await updateDoc(userDocRef, userData);

      //console.log('Proveedor agregado correctamente al usuario.');
    } else {
      console.error('El usuario no existe.');
    }
  } catch (error) {
    console.error('Error al agregar el proveedor al usuario:', error);
  }
}

export async function getProveedor({ uid }) {

  try {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();

      if (userData.proveedores) {
        const proveedores = userData.proveedores;

        return proveedores;
      } else {
        console.log('El usuario no tiene proveedores.');
        return [];
      }
    } else {
      console.error('El usuario no existe.');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener los proveedores del usuario:', error);
    return null;
  }
}

export async function DeleteProveedor({ uid, indice }) {
  
  try {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userdata = userDocSnapshot.data()

      const proveedores = userDocSnapshot.data().proveedores || [];

      // Verificar si el índice es válido
      if (indice >= 0 && indice < proveedores.length) {
        // Eliminar el objeto proveedor utilizando splice()
        proveedores.splice(indice, 1);

        // Actualizar el documento del usuario con el nuevo arreglo de proveedores
        await updateDoc(userDocRef,{...userdata, proveedores:proveedores })
        console.log('Proveedor eliminado exitosamente.')
        return "done"
      } else {
        console.log('El índice es inválido.');
      }

    } else {
      console.error('El usuario no existe.');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener los proveedores del usuario:', error);
    return null;
  }
}