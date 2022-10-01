import './ProductList.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemActions } from '../../store/store';
import React from "react";

function ProductList() {
   const[productList, setProductList] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json');
            const data = await response.json();
            const tempList = [];
            for(var key in data){
                tempList.push({
                    id: key,
                    name: data[key]['productName'],
                    image: data[key]['productImage'],
                    oldPrice: data[key]['oldPrice'],
                    newPrice: data[key]['newPrice']
                })
            }
            setProductList(tempList);
        }
     fetchData();
    }, [])

    const dispatch = useDispatch();

    const addItem = () => {
        dispatch(addItemActions.addItemToCart());
    }
    
  return <div className="product-container">
    {productList.map(elements => {
        return (
        <div className="product-list">
        <img src={elements.image} alt='product-img' className='product-image'></img>
        <p className='product-name'>{elements.name}</p>
        <div className='price-content'>
            <p className='product-star'>⭐⭐⭐⭐⭐</p>
            <div className='price-content'>
                <p className='old-price'>{elements.oldPrice}/-</p>
                <p className='new-price'>{elements.newPrice}/-</p>
            </div>
        </div>
        <button className='add-cart' onClick={addItem}><b>ADD TO CART</b></button>
    </div>
        )
        
    })}
  </div>    
}

export default ProductList;
