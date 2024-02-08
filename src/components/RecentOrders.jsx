import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './RecentOrders.css'

function RecentOrders() {
  const products = [
    { code: '12/3/24', name: '#398', category: 'Juan Pedro', quantity: '$1.590' },
    { code: '11/3/24', name: '#397', category: 'Lucia Fernandez', quantity: '2.890' },
    { code: '10/3/24', name: '#396', category: 'Hard Codeado', quantity: '$900' },
  ];
  
    return (
      <>
       <DataTable value={products}>
        <Column field="code" header="Date" className='RO-column'></Column>
        <Column field="name" header="Id" className='RO-column'></Column>
        <Column field="category" header="Customer" className='RO-column'></Column>
        <Column field="quantity" header="Order Price" className='RO-column'></Column>
      </DataTable>
      </>
    );
  }
  
  export default RecentOrders;