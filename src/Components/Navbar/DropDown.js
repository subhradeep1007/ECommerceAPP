import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CardsContext } from "../../CardsDataContext/Context";

const DropDown = () => {
  const { cardsData,setcardsData,loading,setloading } = useContext(CardsContext);
  const [value, setvalue] = useState("Select Category");
  const handleChange = async (e) => {
    setvalue(e.target.value);
    const search = e.target.value
    
    const url = search ==='All'?'https://fakestoreapi.com/products?limit=20': `https://fakestoreapi.com/products/category/${search.toLowerCase()}`
    setloading(true)
    const res = await fetch(url)
    const ans = await res.json();
    setcardsData(ans)
    setloading(false)
  };

  return (
    <div style={{marginLeft:'0.5rem'}}>
      <select
        value={value}
        onChange={handleChange}
        style={{ height: "2.2rem", borderRadius: "0.4rem" }}
      >
        <option>{value}</option>
        <option value="Electronics">Electronics</option>
        <option value="Jewelery">Jewelery</option>
        <option value="Men's clothing">Men's clothing</option>
        <option value="Women's clothing">Women's clothing</option>
         <option value="All">All</option>
        
      </select>
    </div>
  );
};

export default DropDown;
