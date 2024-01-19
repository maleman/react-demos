import { useId } from "react"
import CartItem from "./CartItem"
import { CartIcon, ClearCartIcon } from "./Icon"
import React from "react"
import { CartContext } from "../ctx/CartContext"
import './Cart.css'
import { usDollarFormat } from "../types/Utils"

export function Cart() {
    const cartCheckboxId = useId()
    const [totalCart, setTotalCart] = React.useState(0)
    const { cart, addToCart, clearCart } = React.useContext(CartContext)

    React.useEffect(() => {

        if (cart.length) {
            const newTotal = cart.reduce(
                (acc, _cart) => {
                    return ((_cart.product.price) * (_cart.qty)) + acc
                }, 0)
            setTotalCart(newTotal)
        } else {
            setTotalCart(0)
        }
    }, [cart])

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <div className="cartTotal">
                    <h4>Total: {usDollarFormat.format(totalCart)}</h4>
                </div>
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