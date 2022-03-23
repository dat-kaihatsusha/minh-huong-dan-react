import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getProduct()
  }, []);

  const getProduct = async () => {
      const res = await axios.get('https://fakestoreapi.com/products')
        .then(res => {
          console.log(res)
        })
        .catch(error => console.log(error));
  }

  return <h1>I've rendered {count} times!</h1>;
}

export default App;
