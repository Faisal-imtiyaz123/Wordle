import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MainWordProvider from './utils/mainWordContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainWordProvider>
    <App />
    </MainWordProvider>
  </React.StrictMode>,
)
