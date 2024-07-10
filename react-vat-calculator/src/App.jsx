import { useState, useEffect } from 'react'; // Import useEffect
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(9);
  const [vat, setVAT] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); // New state variable for total price

  useEffect(() => {
    // Calculate total price whenever `a` or `vat` changes
    const total = Number(a) + vat; // Ensure `a` is a number
    setTotalPrice(total);
  }, [a, vat]); // Dependencies array, effect runs when `a` or `vat` changes

  function addA() {
    setA(a + 1);
    console.log(a);
  }

  const addB = () => {
    setVAT(count + a);
  };

  const handler = (e) => {
    const price = parseFloat(e.target.value); // Parse input value as float
    console.log(price);
    setA(price);
    let v = price * 0.07;
    setVAT(Number(v.toFixed(2))); // Convert to string with 2 decimal places, then back to number
  };

  return (
    <>
      <input
        type="number"
        value={a}
        style={{ fontSize: '30pt' }}
        onChange={handler}
      />

      <h1>My A = {a}</h1>
      <h1>VAT = {vat}</h1>
      <h1>Total Price = {totalPrice.toFixed(2)}</h1> {/* Display total price */}
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
    </>
  );
}

export default App;