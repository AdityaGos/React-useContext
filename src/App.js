import "./styles.css";
import Item from "./component/Item";
import Cart from "./component/Cart";
export default function App() {
  return (
    <div className="App">
      <Item name="Macbook" price={1000} />
      <Item name="PS5" price={4000} />
      <Item name="Iphone 15" price={2000} />
      <Cart />
    </div>
  );
}
