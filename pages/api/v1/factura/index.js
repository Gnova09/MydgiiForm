import { createFactura } from "../../controllers/createFactura"
const PDFDocument = require('pdfkit');
const { Base64Encode } = require('base64-stream');


export default async function POST(req, res) {
    //middlewares
    if (req.body?.row.rnc === undefined) {
        return res.json({ isError: "Cannot access, No File" }, { status: 400 })
    }

    const { row } = req.body


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
    doc.text(`Número de factura: Test123`);
    doc.text(`Fecha: 11/03/2023`);
    doc.text(`Cliente: ${row.name}`);
    doc.text(`Dirección: la canada #12, Lo rio`);
    doc.moveDown(0.5);

    // Tabla de productos
    doc.font('Helvetica-Bold').fontSize(11);
    doc.text('Descripción', 100, 180, { width: 200 });
    doc.text('Cantidad', 300, 180, { width: 60 });
    doc.text('Precio Unitario', 400, 180, { width: 100 });
    doc.text('Subtotal', 500, 180, { width: 100 });
    doc.moveDown(0.5);

    doc.font('Helvetica').fontSize(12);
    let total = 0;

    factura.items.forEach((item, index) => {
        const { descripcion, cantidad, precioUnitario } = item;
        const subtotal = cantidad * precioUnitario;
        total += subtotal;
        
        doc.text(descripcion, 100, doc.y, { width: 200 });
        doc.text(cantidad.toString(), 300, doc.y, { width: 50 });
        doc.text(precioUnitario.toString(), 400, doc.y, { width: 100 });
        doc.text(subtotal.toString(), 500, doc.y, { width: 100 });
        doc.moveDown(0.2);
    });

    // Total
    doc.moveDown(0.5);
    doc.text(`Total: ${total.toFixed(2)}`, { align: 'right' });

    var finalString = ''; // contains the base64 string
    var stream = doc.pipe(new Base64Encode());

    // Finaliza el documento
    doc.end(); // will trigger the stream to end

    stream.on('data', function (chunk) {
        finalString += chunk;
    });

    stream.on('end', function () {
        // the stream is at its end, so push the resulting base64 string to the response
       // console.log({ factura: finalString })
        res.json({ factura: finalString })
    });

}