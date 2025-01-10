// import { Link, useNavigate } from "react-router-dom";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const products = [
//   {
//     id: 1,
//     name: "Apple MacBook Air M2",
//     description: "Space Gray, 8GB-256GB SSD",
//     price: 99999,
//     discount: "Save ₹5,000",
//     image: "./Images/Laptop1.png",
//   },
//   {
//     id: 2,
//     name: "Dell XPS 13",
//     description: "Platinum Silver, 16GB-512GB SSD",
//     price: 129999,
//     discount: "Save ₹10,000",
//     image: "./Images/Laptop2.png",
//   },
//   {
//     id: 3,
//     name: "HP Spectre x360",
//     description: "Nightfall Black, 16GB-1TB SSD",
//     price: 145999,
//     discount: "Save ₹8,000",
//     image: "./Images/Laptop3.png",
//   },
//   {
//     id: 4,
//     name: "Lenovo ThinkPad X1 Carbon",
//     description: "Carbon Black, 16GB-512GB SSD",
//     price: 139999,
//     discount: "Save ₹7,000",
//     image: "./Images/Laptop4.png",
//   },
//   {
//     id: 5,
//     name: "Asus ROG Zephyrus G14",
//     description: "Eclipse Gray, 16GB-1TB SSD",
//     price: 149999,
//     discount: "Save ₹10,000",
//     image: "./Images/Laptop5.png",
//   },
//   {
//     id: 6,
//     name: "Acer Swift 5",
//     description: "Mist Green, 16GB-512GB SSD",
//     price: 89999,
//     discount: "Save ₹6,000",
//     image: "./Images/Laptop6.png",
//   },
//   {
//     id: 7,
//     name: "MSI Stealth 15M",
//     description: "Camo Green, 16GB-1TB SSD",
//     price: 135999,
//     discount: "Save ₹9,000",
//     image: "./Images/Laptop7.png",
//   },
//   {
//     id: 8,
//     name: "Lenovo ThinkPad X1 Carbon",
//     description: "Carbon Black, 16GB-512GB SSD",
//     price: 139999,
//     discount: "Save ₹7,000",
//     image: "./Images/Laptop8.jpeg",
//   },
// ];

// const Laptop = () => {
//   const navigate = useNavigate();

//   const CardHandler = (product) => {
//     navigate("/item-details", {
//       state: {
//         name: product.name,
//         price: product.price,
//         description: product.description,
//         image: product.image,
//         discount: product.discount,
//       },
//     });
//   };

//   const scrollLeft = () => {
//     const container = document.querySelector(".laptop");
//     container.scrollBy({ left: -200, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     const container = document.querySelector(".laptop");
//     container.scrollBy({ left: 200, behavior: "smooth" });
//   };

//   return (
//     <>
//       <div className="bg-gray-100">
//         <div className="flex flex-col md:flex-row md:justify-between items-center p-4 bg-gray-100">
//           <header className="text-red-600 text-2xl font-bold mb-4 md:mb-0">
//             Laptop & Tablets
//           </header>

//           {/* Navigation Links */}
//           <div className="flex flex-wrap gap-4 text-sm md:text-base">
//             <Link to="/computers" className="hover:text-red-600 border-black border-r-2 px-2">
//               Best Laptops
//             </Link>
//             <Link to="/computers" className="hover:text-red-600 border-black border-r-2 px-2">
//               Desktop Pc
//             </Link>
//             <Link to="/computers" className="hover:text-red-600 border-black border-r-2 px-2">
//               iPad & Tablets
//             </Link>
//             <Link to="/computers" className="hover:text-red-600">
//               Accessories
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-4">Laptops</h2>
//         <div className="relative flex items-center">
//           {/* Left Button */}
//           <button
//             onClick={scrollLeft}
//             className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
//           >
//             <FaChevronLeft size={20} />
//           </button>

//           {/* Product Cards */}
//           <div className="flex space-x-4 overflow-x-auto scrollbar-hide laptop">
//             {products.map((product) => {
//               const discountedPrice = product.price - parseInt(product.discount.split("₹")[1].replace(",", ""));
//               const discountPercentage = ((parseInt(product.discount.split("₹")[1].replace(",", "")) / product.price) * 100).toFixed(1);

//               return (
//                 <div
//                   key={product.id}
//                   className="min-w-[200px] bg-white shadow-md rounded-md p-4 flex-shrink-0 cursor-pointer"
//                   onClick={() => CardHandler(product)}
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-40 w-full object-cover rounded-md"
//                   />
//                   <h3 className="text-md font-semibold mt-2">{product.name}</h3>
//                   <p className="text-sm text-gray-500">{product.description}</p>
//                   <div className="flex items-center justify-between mt-2">
//                     <div>
//                       <span className="text-lg font-bold text-orange-500">
//                         ₹{discountedPrice}
//                       </span>
//                       <span className="text-sm text-gray-400 line-through ml-2">
//                         ₹{product.price}
//                       </span>
//                     </div>
//                     <span className="text-sm bg-black text-white px-2 py-1">
//                       {discountPercentage}% Off
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right Button */}
//           <button
//             onClick={scrollRight}
//             className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
//           >
//             <FaChevronRight size={20} />
//           </button>
//         </div>
//       </div>
//       {/* <Footer/> */}
//     </>
//   );
// };

// export default Laptop;





import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Apple MacBook Air M2",
    description: "Space Gray, 8GB-256GB SSD",
    price: 99999,
    discount: "Save ₹5,000",
    image: "./Images/Laptop1.png",
    category: "Best Laptops",
  },
  {
    id: 2,
    name: "Dell XPS 13",
    description: "Platinum Silver, 16GB-512GB SSD",
    price: 129999,
    discount: "Save ₹10,000",
    image: "./Images/Laptop2.png",
    category: "Best Laptops",
  },
  {
    id: 3,
    name: "HP Spectre x360",
    description: "Nightfall Black, 16GB-1TB SSD",
    price: 145999,
    discount: "Save ₹8,000",
    image: "./Images/Laptop3.png",
    category: "Best Laptops",
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1 Carbon",
    description: "Carbon Black, 16GB-512GB SSD",
    price: 139999,
    discount: "Save ₹7,000",
    image: "./Images/Laptop4.png",
    category: "Desktop PC",
  },
  {
    id: 5,
    name: "Asus ROG Zephyrus G14",
    description: "Eclipse Gray, 16GB-1TB SSD",
    price: 149999,
    discount: "Save ₹10,000",
    image: "./Images/Laptop5.png",
    category: "iPad & Tablets",
  },
  {
    id: 6,
    name: "Acer Swift 5",
    description: "Mist Green, 16GB-512GB SSD",
    price: 89999,
    discount: "Save ₹6,000",
    image: "./Images/Laptop6.png",
    category: "Accessories",
  },
];

const Laptop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const navigate = useNavigate();

  const CardHandler = (product) => {
    navigate("/item-details", {
      state: {
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        discount: product.discount,
      },
    });
  };

  const filterByCategory = (category) => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };

  const scrollLeft = () => {
    const container = document.querySelector(".laptop");
    container.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.querySelector(".laptop");
    container.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="flex flex-col md:flex-row md:justify-between items-center p-4 bg-gray-100">
          <header className="text-red-600 text-2xl font-bold mb-4 md:mb-0">
            Laptop & Tablets
          </header>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <button
              onClick={() => filterByCategory("Best Laptops")}
              className="hover:text-red-600 border-black border-r-2 px-2"
            >
              Best Laptops
            </button>
            <button
              onClick={() => filterByCategory("Desktop PC")}
              className="hover:text-red-600 border-black border-r-2 px-2"
            >
              Desktop PC
            </button>
            <button
              onClick={() => filterByCategory("iPad & Tablets")}
              className="hover:text-red-600 border-black border-r-2 px-2"
            >
              iPad & Tablets
            </button>
            <button
              onClick={() => filterByCategory("Accessories")}
              className="hover:text-red-600"
            >
              Accessories
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Laptops</h2>
        <div className="relative flex items-center">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Product Cards */}
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide laptop">
            {filteredProducts.map((product) => {
              const discountedPrice =
                product.price - parseInt(product.discount.split("₹")[1].replace(",", ""));
              const discountPercentage = (
                (parseInt(product.discount.split("₹")[1].replace(",", "")) /
                  product.price) *
                100
              ).toFixed(1);

              return (
                <div
                  key={product.id}
                  className="min-w-[200px] bg-white shadow-md rounded-md p-4 flex-shrink-0 cursor-pointer"
                  onClick={() => CardHandler(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-full object-cover rounded-md"
                  />
                  <h3 className="text-md font-semibold mt-2">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="text-lg font-bold text-orange-500">
                        ₹{discountedPrice}
                      </span>
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ₹{product.price}
                      </span>
                    </div>
                    <span className="text-sm bg-black text-white px-2 py-1">
                      {discountPercentage}% Off
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Laptop;
