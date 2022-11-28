import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function makeTableData(w, h) {
  return new Array(h).fill(0).map((_, row) => {
    return new Array(w).fill(0).map((_, col) => {
      return row * 5 + col;
    })
  })
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        data={makeTableData(5, 1000)}
        rowHeight={50}
        visibleRows={5}
      />
    </Provider>
  </React.StrictMode>
);

