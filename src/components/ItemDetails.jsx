import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../components/cartSlice"; 
import Footer from "./Footer";

const ItemDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  // Set the initial count to location.state.quantity if provided, otherwise default to 1
  const initialCount = location.state.quantity || 1;
  const [count, setCount] = useState(initialCount);

  const pricePerItem = location.state.price || 0;
  const discount = location.state.discount || "";
  const totalPrice = count * pricePerItem;

  useEffect(() => {
    // Update the total price whenever count or pricePerItem changes
    const updatedTotalPrice = count * pricePerItem;
  }, [count, pricePerItem]);

  const handleDec = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        total: totalPrice,
        item: location.state.description,
      },
    });
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: location.state.id, 
        name: location.state.name,
        price: location.state.price,
        quantity: count, 
        image: location.state.image,
      })
    );
    alert("Item added to cart!");
  };

  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={location.state.image}
          alt="img"
          className="w-64 h-64 object-contain rounded-md shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">{location.state.name}</h3>
        <p className="mb-2">{location.state.description}</p>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Price per item: ₹{pricePerItem}
        </h3>
        {discount && (
          <h4 className="text-lg font-semibold text-green-600 mb-4">
            {discount}
          </h4>
        )}
        <h4 className="text-lg font-semibold text-gray-700 mb-4">
          Total: ₹{totalPrice}
        </h4>

        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={handleDec}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
          >
            -
          </button>
          <span className="text-lg font-semibold">{count}</span>
          <button
            onClick={handleInc}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
          >
            +
          </button>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default ItemDetails;
