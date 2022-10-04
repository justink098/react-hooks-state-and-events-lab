import React,{useState} from "react";

function Item({ name, category }) {
  const [onChange, setOnChange]=useState(true)
  function toggle(){
    setOnChange(onChange=> !onChange)
  }
  const render = onChange ? 'Add to Cart': 'Remove From Cart'
  const classRender = onChange ? "" : "in-cart"
  return (
    <li className={classRender}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggle} className="add">{render}</button>
    </li>
  );
}

export default Item;
