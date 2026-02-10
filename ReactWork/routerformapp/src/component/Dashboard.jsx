import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const serverResponse = await fetch('https://fakestoreapi.com/products/');
      const jsonData = await serverResponse.json();
      setData(jsonData);
      console.log(jsonData);
    }
    fetchData();
  }, []);

  function addToCart(ele) {

    setCart(data => [...data, ele])
  }

  return (

    <div>
      <div>
        {cart.length == 0 ? 'Cart is empty' :
          <div>
            {cart.map((ele) => (
              <h5>{ele.title}</h5>
            ))
            }
          </div>
        }
      </div>
      {data.length == 0 ? (<h2>Product is not available at this time.</h2>) :
        <h2>
          {data.map((ele) => (

            <div
              style={{}}
            >
              <img src={ele.image} alt={ele.title} height={100} width={100} />
              <h2>{ele.title}</h2>
              <h2>${ele.price}</h2>
              <h3>{ele.description}</h3>
              <h2>{ele.category}</h2>
              <button onClick={() => { addToCart(ele) }}>Add to Cart</button>
            </div>
          ))}
        </h2>}
    </div>
  );
}

export default Dashboard;
