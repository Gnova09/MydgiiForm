const fs = require("fs")

const createFile = (contenido) => {
    const nombreArchivo = 'archivo.txt';

    fs.writeFile(nombreArchivo, contenido, (err) => {
        if (err) {
            console.error('Error al crear el archivo:', err);
            return;
        }
        console.log(`Archivo '${nombreArchivo}' creado correctamente.`);
    });
};

export default function handler(req, res) {
     const contenido = `606|00117016352|202302|18
  101068744|1|02|B0114480717||20230228||500||500|||||0||||||||03`;

    createFile(contenido); 

    res.status(200).json({ message: 'Archivo creado correctamente.' });
}