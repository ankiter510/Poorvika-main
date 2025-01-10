import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
    totalAmount: location.state?.total || "",
  });

  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const {
      fname,
      lname,
      email,
      mobile,
      address,
      country,
      city,
      state,
      pincode,
      totalAmount,
    } = formData;

    if (!fname || !lname || !email || !mobile || !address || !country || !city || !state || !pincode || !totalAmount) {
      setError("All fields are required!");
      return;
    }

    setError("");

    const shippingAddress = {
      first_name: fname,
      last_name: lname,
      address,
      email,
      country,
      state,
      city,
      postcode: pincode,
      phone_number: mobile,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    const options = {
      key: "rzp_test_vv1FCZvuDRF6lQ",
      key_secret: "P4JAUwn4VdE6xDLJ6p2Zy8RQ",
      amount: parseInt(totalAmount) * 100,
      currency: "INR",
      name: "Web Mastery",
      description: "Order Payment",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("Payment ID:", paymentId, shippingAddress);
        setOrderPlaced(true);

        setTimeout(() => {
          navigate("/");
        }, 3000);
      },
      theme: {
        color: "#07a291db",
      },
    };

    const pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <>
      <div className="container mx-auto p-4 bg-gray-100">
        {orderPlaced && (
          <div className="w-full max-w-md bg-green-100 text-green-800 px-4 py-2 rounded-lg mb-4 text-center">
            Your order has been placed successfully!
          </div>
        )}
        {error && (
          <div className="w-full max-w-md bg-red-100 text-red-800 px-4 py-2 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <div className="card shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Checkout Form</h2>
          <form onSubmit={handlePlaceOrder}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                value={formData.fname}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={formData.lname}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="p-2 border rounded col-span-2"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="number"
                name="totalAmount"
                placeholder="Total Amount"
                value={formData.totalAmount}
                onChange={handleChange}
                className="p-2 border rounded col-span-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
