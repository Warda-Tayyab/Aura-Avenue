
import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'
import  Breadcrums  from '../Components/Breadcrums/Breadcrums';
import  ProductDisplay  from '../Components/ProductDisplay/Productdisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Relatedproduct from '../Components/RelatedProduct/Relatedproduct';

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
 const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
        <Breadcrums product={product}/>
        <ProductDisplay product={product}></ProductDisplay>
        <DescriptionBox/>
        <Relatedproduct></Relatedproduct>
    </div>
  );
}

export default Product;  
