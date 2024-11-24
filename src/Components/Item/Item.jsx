import React from 'react';
import './Item.css';
import  {Link}  from'react-router-dom'

function Item(props) {
    return (
        <>
            <div className="item">    
       <Link to={`/product/${props.id}`}><img  onClick={window.scrollTo(0,0)}src={props.image} alt="" /></Link>      

 
                <p>{props.name}</p>
                <div className="item-prices">
                    <span className="item-price-new">${props.new_price}</span>
                    <span className="item-price-old">${props.old_price}</span>
                </div>
            </div>
        </>
    );
}

export default Item;
