const PDFDocument = require('pdfkit');
const { Base64Encode } = require('base64-stream');

const createFactura = async ({ row }) => {
    // Crea un nuevo documento PDF
    const doc = new PDFDocument({ size: 'letter' }); // Puedes ajustar el tamaño según tus necesidades

    // Define la información de la factura
    

    const factura = {
        numero: '12345',
        fecha: '2023-09-27',
        cliente: {
            nombre: 'Cliente Ejemplo',
            direccion: '123 Calle Principal',
            ciudad: 'Ciudad Ejemplo',
        },
        items: [
            { descripcion: 'Producto 1', cantidad: 2, precioUnitario: 10 },
            { descripcion: 'Producto 2', cantidad: 3, precioUnitario: 15 },
            // Agrega más elementos si es necesario
        ],
    };

    // Agrega contenido a la factura
    doc.font('Helvetica-Bold').fontSize(18).text('Factura', { align: 'center' });
    doc.moveDown(0.5);

    // Información de la factura
    doc.font('Helvetica').fontSize(12);
    doc.text(`Número de factura: #factura2342`);
    doc.text(`Fecha: 23/03/2023`);
    doc.text(`Cliente: ${row.name}`);
    doc.text(`Dirección: las canadas, #243`);
    doc.moveDown(0.5);
    
    var finalString = ''; // contains the base64 string
    var stream = doc.pipe(new Base64Encode());
    console.log(stream)
    
    // Finaliza el documento
    doc.end(); // will trigger the stream to end

    /* stream.on('data', function (chunk) {
        finalString += chunk;
    });

    stream.on('end', function () {
        // the stream is at its end, so push the resulting base64 string to the response
        console.log({factura: finalString})
        return({factura: finalString});
    }); */
}

module.exports = {
    createFactura
}