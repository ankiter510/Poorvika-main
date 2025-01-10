import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const collections = [
  {
    id: 1,
    name: "Apple watch series 10 gps",
    description: "Smart watch cellular silver aluminum",
    price: 154999,
    discount: "Save ₹20,000",
    image: "./Images/Latest1.png",
  },
  {
    id: 2,
    name: "Haier hd ready smart TV",
    description: "Smart TV 32 inch",
    price: 29999,
    discount: "Save ₹3,000",
    image: "./Images/Latest2.png",
  },
  {
    id: 3,
    name: "Samsung galaxy watch",
    description: "GPS, 41mm Midnight ultra lte titanium gray",
    price: 45999,
    discount: "Save ₹5,000",
    image: "./Images/Latest3.png",
  },
  {
    id: 4,
    name: "Sony Bravia 8xr 4k ultra",
    description: "HD smart android TV",
    price: 299999,
    discount: "Save ₹50,000",
    image: "./Images/Latest4.png",
  },
  {
    id: 4,
    name: "Zebronics zeb ht100",
    description: "Beard trimmer blach",
    price: 299999,
    discount: "Save ₹50,000",
    image: "./Images/Latest5.png",
  },
];

const Latest = () => {
  const navigate = useNavigate();

  const CardHandler = (product) => {
    navigate("/item-details", {
      state: {
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        discount: product.discount
      },
    });
  };

  const scrollLeft = () => {
    const container = document.querySelector(".collection");
    container.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.querySelector(".collection");
    container.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="flex flex-col md:flex-row md:justify-between items-center p-4 bg-gray-100">
          <header className="text-red-600 text-2xl font-bold mb-4 md:mb-0">
            Latest Collections
          </header>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Collections</h2>
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
            {collections.map((product) => {
              const discountedPrice = product.price - parseInt(product.discount.split("₹")[1].replace(",", ""));
              const discountPercentage = ((parseInt(product.discount.split("₹")[1].replace(",", "")) / product.price) * 100).toFixed(1);

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

export default Latest;
