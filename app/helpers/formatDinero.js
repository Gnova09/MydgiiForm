

export function formatearCantidadDeDinero(cantidad) {
    // Convertir la cantidad a texto
    const numeroRedondeado = Math.round(cantidad * 100) / 100;


    return numeroRedondeado;
}

