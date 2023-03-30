import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  // const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [id, setId] = useState('')
  useEffect(
    () => {
      axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        console.log(res.data)
        setProduct(res.data)
        // setProducts(res.data)
      }).catch((err) => {
        console.log(err)
      })

    },[id]
  )
  return (
    <div className="App">
      {/* <div className="container">
        {products.map((product) => (
          <div key={product.id}>
            <div>{product.title}</div>
            <div className='dis'>{product.description}</div>
            <div>{product.category}</div>
            <img src={product.image} alt="there is no image" />
          </div> 

        ))}
      </div> */}

      <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />

      <div>Product-id : {product.id}{product.title}</div>
      <div>Discription:{product.category}</div>
      <img src={product.image} alt="there is no image"/>
    </div>
  );
}

export default App;
