import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
          <App />
          <ToastContainer position='top-center'/>
      </ChakraProvider>,
  </React.StrictMode>,
)
