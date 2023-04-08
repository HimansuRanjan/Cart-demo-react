import React from "react";
import img1 from "../assets/macbook.jpeg";
import img2 from "../assets/blackshoes.jpg";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const productList = [
    { 
        name: "Mac Book",
        price: 12000, 
        imgSrc: img1, 
        id: "sdafsnvjsvksvn" 
    },
    { 
        name: "Black Shoes",
        price: 1000, 
        imgSrc: img2, 
        id: "sdafsvjsvksvn" 
    }
  ];

  const dispatch = useDispatch();

  const addToCartHander = (options)=>{
    dispatch({type: 'addToCart', payload: options});
    dispatch({type: 'calculatePrice'});
    toast.success("Added to Cart");
  };

  return (
    <div className="home">
      {
        productList.map((i)=>(
            <ProductCard 
            key={i.id} 
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            handler={addToCartHander}
            />
        ))
      }
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt="name" />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({name, price, id, quantity: 1, imgSrc})}>Add to Cart</button>
  </div>
);

export default Home;