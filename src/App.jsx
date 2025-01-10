import './App.css'
import ItemDetails from './components/ItemDetails'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Mobile from './components/Mobile'
import Laptop from './components/Laptop'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import Latest from './components/Latest'
import Register from './components/Register'
import Login from './components/Login'
import SearchPage from './components/SearchPage'
import Chatbot from './components/Chatbot' // Import the Chatbot component

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/item-details" element={<ItemDetails/>}></Route>
        <Route path="/mobiles" element={<Mobile/>}></Route>
        <Route path="/computers" element={<Laptop/>}></Route>
        <Route path="/latest" element={<Latest/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/chatbot" element={<Chatbot />} /> {/* Add the Chatbot route */}
      </Routes>
    </>
  )
}

export default App
