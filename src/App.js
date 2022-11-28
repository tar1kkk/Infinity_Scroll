
import './App.css';
import FormValid from './comp/FormValid';
import Table from './comp/Table';


function App({ data, rowHeight, visibleRows }) {
  return (
    <div>
      <Table data={data} rowHeight={rowHeight} visibleRows={visibleRows} />
      <FormValid />
    </div>
  )

}


export default App;
