import '../components/suppliersTable';
import SuppliersTable from './components/suppliersTable'
import Search from './components/search';

const Suppliers = () => {
  
  return (
    <div>
      <Search/>
      <SuppliersTable/>
   </div>
  )
}

export default Suppliers;