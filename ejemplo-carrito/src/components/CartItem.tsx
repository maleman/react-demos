import { Product } from "../service/Products"

type Props = {
    product: Product
    quantity: number;
    addToCart(product: Product): void;
}

function CartItem({ product, quantity }: Props) {

    return (
        <li>
            <img
                src={product.thumbnail}
                alt={product.title}
            />
            <div>
                <strong>{product.title}</strong> - ${product.price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button>+</button>
            </footer>
        </li>
    )
}

export default CartItem