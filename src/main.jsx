// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import { CartProvider } from './components/CartContext.jsx'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <CartProvider>
//       <App />
//     </CartProvider>
//   </BrowserRouter>
// )






import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    {/* <CartProvider> */}
        <App />
      {/* </CartProvider> */}
    </BrowserRouter>
  </Provider>
);
