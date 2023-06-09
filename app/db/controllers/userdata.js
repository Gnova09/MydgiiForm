import { db, app } from "../firebase";
import { ref, set } from "firebase/database"

export function newUser(name, email, pass) {

    const reference = ref(db, "users/" + name);

    set(reference, {
        username: name,
        email,
        pass
    })

}

export function newForm606() {
    
    const reference = ref(db, "forms606")
    // Crear un nuevo formulario en el documento referenciado
    const nuevoFormularioData = {
        idForm: 1,
        cliente: 'Nombre del cliente',
        Datecreated: new Date(),
        row: [
            {
                ID: 1,
                bienes: 'Descripción de bienes 1',
                NCF: 'NCF1',
                Date: new Date(),
                Monto: 100,
                propina: 10,
                Fpago: 'Forma de pago 1',
                Itbis: 18,
                Itbis2: 0,
                Itbis10: 0
            },
            {
                ID: 2,
                bienes: 'Descripción de bienes 2',
                NCF: 'NCF2',
                Date: new Date(),
                Monto: 200,
                propina: 20,
                Fpago: 'Forma de pago 2',
                Itbis: 0,
                Itbis2: 5,
                Itbis10: 10
            }
        ]
    };
    // Establecer los datos del nuevo formulario en el documento referenciado
    nuevoFormularioRef.set(nuevoFormularioData)
        .then(() => {
            console.log('Formulario creado con ID:', nuevoFormularioRef.id);
        })
        .catch((error) => {
            console.error('Error al crear el formulario:', error);
        });

}