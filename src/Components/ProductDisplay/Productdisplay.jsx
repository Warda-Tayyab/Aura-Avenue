
import'./ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import React, { useContext } from 'react'


 const Productdisplay = (props) => {
    const {product}=props;
    const{addToCart}=useContext(ShopContext);
  return (
    <>
    <div className="productdisplay">
      <div className="productdisplay-left">
   <div className="productdisplay-img-list">
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
   </div>
<div className="productdisplay-img">
    <img className='productdisplay-main-img' src={product.image} alt="" />
</div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
             <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                ${product.new_price}
                </div>
                </div>
                <div className="productdisplay-right-description">
The soft, lightweight material ensures all-day comfort, while the modern cut gives it a flattering silhouette. Whether you pair it with your favorite jeans or layer it under a jacket, this versatile top will quickly become a go-to in your closet. Available in a range of sizes to suit every body type.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                </div>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
               
            </div>
            
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women, T-shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>

       
      </div>
        </div>
        </>
  )
} 
export default Productdisplay
