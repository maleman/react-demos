import { useId } from "react"
import CartItem from "./CartItem"
import { CartIcon, ClearCartIcon } from "./Icon"
import React from "react"
import { CartContext } from "../ctx/CartContext"
import './Cart.css'

export function Cart() {
    const cartCheckboxId = useId()
    const [totalCart, setTotalCart] = React.useState(0)
    const { cart, addToCart, clearCart } = React.useContext(CartContext)

    const usDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', });

    React.useEffect(() => {
        const newTotal = (cart.length)
            ? cart.reduce(
                (acc, _cart) => {
                    return ((_cart.product.price) * (_cart.qty)) + acc
                }, 0)
            : 0

        setTotalCart(newTotal)

    }, [cart])

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <h4>Total: {usDollar.format(totalCart)}</h4>
                <ul>
                    {
                        cart.length ? (
                            cart.map(cart => (
                                <CartItem
                                    key={cart.product.id}
                                    product={cart.product}
                                    quantity={cart.qty}
                                    addToCart={() => addToCart(cart.product, 1)}
                                />
                            ))
                        )
                            : <h4 style={{ color: 'red' }}>No hay productos en el carrito</h4>
                    }
                </ul>
                {
                    (cart.length) ?
                        <button onClick={clearCart}>
                            <ClearCartIcon />
                        </button>
                        : <></>
                }
            </aside>
        </>
    )
}