import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import store from './store/index.js';
import { queryClient } from "./https.js";
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
