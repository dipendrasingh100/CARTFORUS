import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = "AXEQilAk6OVdjgP7LtM7giugCH1If_-yag8MmbQgjNftwXF5Raj7BtifWwz0lg1Xuasq4WfwSf9dQe-s"
root.render(
  <PayPalScriptProvider options={{ "client-id": client, currency: 'USD', intent: "capture" }}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </PayPalScriptProvider>
);

