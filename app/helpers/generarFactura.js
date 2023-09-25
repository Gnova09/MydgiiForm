//by importing 
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";

export const generarFactura = async ({ rnc = "", name = "", tel = "", listOfProducts = "", fTotal = "", Tsubtotal = "", Titbis = "", nota }) => {
  var props = {
    outputType: OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: `Factura_${rnc}`,
    orientationLandscape: false,
    compress: true,
    logo: {
      src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
      width: 53.33, //aspect ratio = width/height
      height: 26.66,
      margin: {
        top: 0, //negative or positive num, from the current position
        left: 0 //negative or positive num, from the current position
      }
    },
    stamp: {
      inAllPages: true, //by default = false, just in the last page
      src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
      type: 'JPG', //optional, when src= data:uri (nodejs case)
      width: 20, //aspect ratio = width/height
      height: 20,
      margin: {
        top: 0, //negative or positive num, from the current position
        left: 0 //negative or positive num, from the current position
      }
    },
    business: {
      name: "AG Accesorios",
      address: "Albania, Tirane ish-Dogana, Durres 2001",
      phone: "+1 829 644 4677 ",
      email: "AGAcesorios@gmail.com",
      email_1: "infoAGAcesorios@gmail.com",
      website: "www.AGAcesorios.com",
    },
    contact: {
      label: "Facturado al cliente:",
      name: name,
      address: "cliente.direccion",
      phone: tel,
      email: "cliente.email",
      otherInfo: rnc,
    },
    invoice: {
      label: "Factura #: ",
      num: "idFactura",
      invDate: "Fecha de pago: 01/01/2021",
      invGenDate: "Fecha de factura: 02/02/2021",
      headerBorder: false,
      tableBodyBorder: false,
      header: [
        {
          title: "#",
          style: {
            width: 10
          }
        },
        {
          title: "Producto",
          style: {
            width: 30
          }
        },
        {
          title: "Descripcion",
          style: {
            width: 70
          }
        },
        { title: "Precio" },
        { title: "Cantidad" },
        { title: "Itbis" },
        { title: "Subtotal" },
        { title: "Total" }
      ],
      table: listOfProducts.map((item, index) => ([
        index + 1,
        item.name,
        item.description ?? "",
        item.precio,
        item.cant,
        item.itbis,
        item.subtotal,
        item.total
      ])),
      additionalRows: [{
        col1: 'Total:',
        col2: `${fTotal}`,
        col3: '$RD',
        style: {
          fontSize: 14 //optional, default 12
        }
      },
      {
        col1: 'Itbis:',
        col2: `${Titbis}`,
        col3: '$RD',
        style: {
          fontSize: 10 //optional, default 12
        }
      },
      {
        col1: 'SubTotal:',
        col2: `${Tsubtotal}`,
        col3: '$RD',
        style: {
          fontSize: 10 //optional, default 12
        }
      }],
      invDescLabel: "Nota",
      invDesc: `${nota}`,
    },
    footer: {
      text: "The invoice is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
  };

   jsPDFInvoiceTemplate(props);
}

