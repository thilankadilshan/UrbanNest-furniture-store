
import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]);

    // Fetch product information
    const fetchInfo = async () => {
        try {
            const res = await fetch('http://localhost:4000/allproducts');
            if (!res.ok) throw new Error('Failed to fetch products');
            const data = await res.json();
            setAllProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Remove a product
    const remove_product = async (id) => {
        try {
            const res = await fetch('http://localhost:4000/removeproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            if (!res.ok) throw new Error('Failed to remove product');
            await fetchInfo(); // Refresh the product list
        } catch (error) {
            console.error('Error removing product:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className='list-product'>
            <h1>All Product List</h1>
            <div className='listproduct-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className='listproduct-allproduct'>
                <hr />
                {allproducts.length === 0 ? (
                    <p>No products available.</p>
                ) : (
                    allproducts.map((product) => (
                        <div key={product.id} className='listproduct-format-main listproduct-format'>
                            <img src={product.image} alt='' className='listproduct-product-icon' />
                            <p>{product.name}</p>
                            <p>${product.old_price}</p>
                            <p>${product.new_price}</p>
                            <p>{product.category}</p>
                            <img
                                onClick={() => remove_product(product.id)}
                                className='listproduct-remove-icon'
                                src={cross_icon}
                                alt='Remove'
                            />
                            <hr />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ListProduct;
