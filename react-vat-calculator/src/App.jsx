import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(9);
  const [discount, setDiscount] = useState(0);
  const [vat, setVAT] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = Number(a) + vat - discount;
    setTotalPrice(total);
  }, [a, vat, discount]);

  function addA() {
    setA(a + 1);
    console.log(a);
  }

  const addB = () => {
    setVAT((count + a - discount) * 0.07);
  };

  const handler = (e) => {
    const price = parseFloat(e.target.value);
    console.log(price);
    setA(price);
    let v = (price - discount) * 0.07;
    setVAT(Number(v.toFixed(2)));
  };

  const handleDiscountChange = (e) => {
    const disc = parseFloat(e.target.value);
    setDiscount(disc);
    let v = (a - disc) * 0.07;
    setVAT(Number(v.toFixed(2)));
  };

  return (
    <div className="app-container">
      <header>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <label htmlFor="priceInput">Price:</label>
      <input
        id="priceInput"
        type="number"
        value={a}
        style={{ fontSize: '30pt', display: 'block', margin: '10px 0' }}
        onChange={handler}
      />
      <label htmlFor="discountInput">Discount:</label>
      <input
        id="discountInput"
        type="number"
        value={discount}
        style={{ fontSize: '30pt', display: 'block', margin: '10px 0' }}
        onChange={handleDiscountChange}
        placeholder="Discount"
      />

      <h1>My A = {a}</h1>
      <h1>Discount = {discount}</h1>
      <h1>VAT = {vat}</h1>
      <h1>Total Price = {totalPrice.toFixed(2)}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={addA}>Increase A</button>
        <button onClick={addB}>Increase B</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
