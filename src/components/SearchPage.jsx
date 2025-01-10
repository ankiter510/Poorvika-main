import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { query } = useParams();

  // Sample static data (Replace this with dynamic fetching logic)
  const products = [
    { name: "Mobile 1", category: "Mobile" },
    { name: "Laptop 1", category: "Laptop" },
    { name: "Mobile 2", category: "Mobile" },
    { name: "Laptop 2", category: "Laptop" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Search Results for "{query}"</h2>
      {filteredProducts.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p>{product.category}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">View Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
