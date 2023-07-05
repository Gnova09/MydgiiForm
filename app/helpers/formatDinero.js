

export function formatearCantidadDeDinero(cantidad) {
    // Convertir la cantidad a texto
    const cantidadTexto = String(cantidad);

    // Separar la parte entera de la parte decimal (si existe)
    const partes = cantidadTexto.split(".");
    let parteEntera = partes[0];
    let parteDecimal = partes[1] || "";

    // Agregar las comas a la parte entera
    parteEntera = parteEntera.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Unir la parte entera y la parte decimal (si existe)
    const cantidadFormateada = parteDecimal ? `${parteEntera}.${parteDecimal}` : parteEntera;

    return cantidadFormateada;
}

