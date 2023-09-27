

export const generarFactura = async ({ rnc = "", name = "", tel = "", listOfProducts = "", fTotal = "", Tsubtotal = "", Titbis = "", nota = "" }) => {

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    row:{rnc, 
    fTotal,
    name,
    tel,
    listOfProducts,
    Titbis,
    Tsubtotal,
    nota}
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {

    const response = await fetch("/api/v1/factura", requestOptions)
    const data = await response.json()

    if (data.factura) {
     
     return (data)
    } else {
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }

}

