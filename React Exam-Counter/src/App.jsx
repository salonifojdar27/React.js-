import { useState } from "react";
import Css from './styles/style.css'
function App() {

  const [count, setcount] = useState(0);

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }


  return (
    <div className="container">
      <h1>Welcome To Counter 2.0</h1>
      <div>
        <button className="minusbtn" data-testid="minusonebtn" onClick={() => setcount(count - 1)} disabled={count === 0}>-1</button>
        <button className="plusbtn" data-testid="plusonebtn" onClick={() => setcount(count + 1)}>+1</button>
        <div>
          <button className="resetbtn" data-testid="resetbtn" onClick={() => setcount(0)}>Reset count</button>
        </div>
      </div>
      <span className="counter" data-testid="counter"> Count:{count}</span>
      <div>
        <span className="odd-Even" data-testid="odd-or-even">This number is :{count % 2 === 0 ? "Even" : "Odd"}</span>
        <br />
        <span className="prime" data-testid="is-prime">Prime Number :{isPrime(count) ? "true" : "false"}</span>
      </div>
    </div>
  );
}



export default App;

