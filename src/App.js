import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import { useState } from "react";

function App() {
  const [cardItems, setCardItems] = useState([]);
  const { products } = data;
  const onAdd = (product) => {
    const existItem = cardItems.find((x) => x.id === product.id);

    if (existItem) {
      setCardItems(
        cardItems.map((x) =>
          x.id === product.id ? { ...existItem, qty: existItem.qty + 1 } : x
        )
      );
    } else {
      setCardItems([...cardItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const existItem = cardItems.find((x) => x.id === product.id);
    if (existItem.qty === 1) {
      setCardItems(cardItems.filter((x) => x.id !== product.id));
    } else {
      setCardItems(
        cardItems.map((x) =>
          x.id === product.id ? { ...existItem, qty: existItem.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItems={cardItems.length} />
      <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Basket onAdd={onAdd} onRemove={onRemove} cardItems={cardItems} />
      </div>
    </div>
  );
}

export default App;
