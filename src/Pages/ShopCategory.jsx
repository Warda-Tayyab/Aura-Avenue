
import { ShopContext } from '../Context/ShopContext';
import React, { useContext } from 'react';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import './CSS/ShopCategory.css'
const ShopCategory = (props) => {
  // Fetch the product data from the ShopContext
  const { all_product } = useContext(ShopContext);

  return (
    <>
      <div className="shop-category">
        {/* Banner Image */}
        <img className='shopcategory-banner' src={props.banner} alt="Shop Category Banner" />

        {/* Sorting Section */}
        <div className="shopcategory-indexSort">
          <p><span>Showing 1-12</span> out of 36 products</p>

          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
          </div>
        </div>

        {/* Products Section */}
        <div className="shopcategory-products">
          {all_product.map((item, i) => {
            // Log the category values for debugging
           

            // Compare the categories with normalization (case insensitive, trimmed)
            if (props.category === item.category.toLowerCase().trim()) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;  // Return null if the categories don't match
            }
          })}

        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    </>
  );
}

export default ShopCategory;
