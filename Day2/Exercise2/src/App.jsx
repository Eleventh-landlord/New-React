import './App.css'
import ProductCard from "./ProductCard.jsx";

function App() {
  const products = [
    {
      name: "Laptop Computer",
      price: 450000,
      image: "/Image/laptop.jpeg",
      inStock: true,
    },
    {
      name: "Wireless Headphones",
      price: 85000,
      image: "/Image/headphone.jpeg",
      inStock: false,
    },
    {
      name: "Smartphone X",
      price: 320000,
      image: "/Image/phone.jpeg",
      inStock: true,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1> My E-Commerce Products</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {products.map((p, index) => (
          <ProductCard
            key={index}
            name={p.name}
            price={p.price}
            image={p.image}
            inStock={p.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

