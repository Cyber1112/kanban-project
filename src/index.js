import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./sass/custom-files.css"
import {DragDropProvider} from './components/information/DrgDrpContext'
ReactDOM.render(
  <React.StrictMode>
    <DragDropProvider>
      <App />
    </DragDropProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

