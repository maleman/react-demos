import * as React from 'react';
import { Product } from '../service/Products';

interface ICart {
    product: Product
    qty: number
}

export type CartContextType = {
    cart: ICart[]
    addToCart(product: Product, qty: number): void
    removeFromCart(product: Product): void
    clearCart(): void
}

export const CartContext = React.createContext<CartContextType>({} as CartContextType)

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = React.useState<ICart[]>({} as ICart[]);

    const addToCart = (_product: Product, _qty: number) => {

        const actualCart = (cart.length) ? cart : []
        if (actualCart.some(item => item.product.id === _product.id)) {
            const index = actualCart.findIndex(item => item.product.id === _product.id)
            actualCart[index].qty = actualCart[index].qty + 1
        } else {
            const newICart: ICart = {
                product: _product,
                qty: _qty
            }
            actualCart.push(newICart)
        }
        setCart(actualCart.slice())
    }

    const removeFromCart = (product: Product) => {
        const actualCart = (cart.length) ? cart : []
        if (cart.some(item => item.product.id === product.id))
            setCart(actualCart.filter(item => item.product.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider