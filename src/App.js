import Card from "./Components/Card";
import "./Components/Card.css";
import "./App.css";

const products = [
  {
    productName: "Product 1",
    productType: "dress",
    productPrice: "LKR 3,0000",
    productSizes: [
      { size: "xs", isAvailable: true },
      { size: "s", isAvailable: false },
      { size: "m", isAvailable: true },
      { size: "l", isAvailable: true },
      { size: "xl", isAvailable: true },
    ],
  },
  {
    productName: "Product 1",
    productType: "dress",
    productPrice: "LKR 3,0000",
    productSizes: [
      { size: "xs", isAvailable: true },
      { size: "s", isAvailable: false },
      { size: "m", isAvailable: true },
      { size: "l", isAvailable: true },
      { size: "xl", isAvailable: true },
    ],
  },
  {
    productName: "Product 1",
    productType: "dress",
    productPrice: "LKR 3,0000",
    productSizes: [
      { size: "xs", isAvailable: true },
      { size: "s", isAvailable: false },
      { size: "m", isAvailable: true },
      { size: "l", isAvailable: true },
      { size: "xl", isAvailable: true },
    ],
  },
  {
    productName: "Product 1",
    productType: "dress",
    productPrice: "LKR 3,0000",
    productSizes: [
      { size: "xs", isAvailable: true },
      { size: "s", isAvailable: false },
      { size: "m", isAvailable: true },
      { size: "l", isAvailable: true },
      { size: "xl", isAvailable: true },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        {products.map((val, key) => {
          return (
            <div
              style={{
                margin: "10px",
                padding: "10px",
                border: "1px solid black",
              }}
            >
              <Card key={key} product={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
