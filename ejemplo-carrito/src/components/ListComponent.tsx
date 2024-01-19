
import React from 'react';
import { Product } from '../service/Products';
import { AddToCartIcon, ClearCartIcon } from './Icon';
import './ListComponets.css'
import { CartContext } from '../ctx/CartContext';

type Props = {
    products: Product[]
}

const ListComponent = ({ products }: Props) => {


    const { cart, addToCart, removeFromCart } = React.useContext(CartContext)
    const usDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', });
    const isItemInCart = (product: Product) => {
        console.log(product.id)
        return cart.length ? cart.some(item => item.product.id === product.id) : false
    }

    return (
        <main className='lista' >
            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.description} />
                            <p>{product.title}</p>
                            <p>Precio: {usDollar.format(product.price)} </p>
                            <h5 style={{ backgroundColor: 'yellow', color: 'red' }}>Descuento: {product.discountPercentage}%</h5>
                            <button
                                style={{
                                    backgroundColor: isItemInCart(product) ? 'red' : '#09f',
                                    color: '#fff'
                                }}
                                onClick={() =>
                                    isItemInCart(product) ?
                                        removeFromCart(product) : addToCart(product, 1)} >
                                {
                                    isItemInCart(product) ? <ClearCartIcon /> : <AddToCartIcon />
                                }

                            </button>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default ListComponent