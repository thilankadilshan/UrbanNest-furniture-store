
import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';


const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product.id); 
    navigate('/cart'); 
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dull_icon} alt="Star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">

          <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
          <div className="productdisplay-right-price-new">{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          <p>Example product description goes here.</p>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Gift, new arrival
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Modern, Stylish

        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
