import { Product } from "../service/Products"
import { usDollarFormat } from "../types/Utils";

type Props = {
    product: Product
    quantity: number;
    addToCart(product: Product): void;
}

function CartItem({ product, quantity, addToCart }: Props) {

    return (
        <li>
            <img
                src={product.thumbnail}
                alt={product.title}
            />
            <div>
                <strong>{product.title}</strong> - {usDollarFormat.format(product.price)}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export default CartItem