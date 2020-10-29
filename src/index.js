import React from 'react';
import ReactDOM from 'react-dom';
import SurveyProvider from './context/SurveyContext'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SurveyProvider>
      <App />
    </SurveyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

