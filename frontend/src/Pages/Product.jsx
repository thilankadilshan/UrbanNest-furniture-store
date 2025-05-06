import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrums.jsx';
import ProductDisplay from '../Components/ProductDisaplay/ProductDisplay.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {ProductId} = useParams();
  const product = all_product.find((e)=> e.id === Number(ProductId))
  return (
    <div>

      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>

    </div>
  )
}

export default Product
