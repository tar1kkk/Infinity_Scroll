
import './App.css';
import FormValid from './comp/FormValid';
import Table from './comp/Table';
import TableWithApi from './comp/TableWithApi';


function App() {
  return (
    <div>
      {/* <Table data={data} rowHeight={rowHeight} visibleRows={visibleRows} /> */}
      <FormValid />
      <TableWithApi />
    </div>
  )

}


export default App;
