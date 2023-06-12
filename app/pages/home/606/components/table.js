"use client"

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useAppContext from '@/app/context/context';

/* const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'cliente', headerName: 'Cliente', width: 130 },
  { field: 'date', headerName: 'Fecha creacion', width: 130 },
  {
    field: 'registro',
    headerName: 'Cantidad de registros',
    type: 'number',
    width: 190,
  },
  
]; */


export default  function DataTable({column, row}) {
 

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={column}
        
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
    </div>
  );
}