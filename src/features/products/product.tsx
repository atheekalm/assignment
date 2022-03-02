import { product } from "../../app/models/models"
import { useAppDispatch } from "../../app/store/Configurestore"
import { addtocart, carttotalquantityIncrement } from "./cartSlice";

interface productprops {
    product: product
}

export default function Product({ product }: productprops) {
    const dispatch = useAppDispatch();
    function Addtocart(product: product) {
        dispatch(carttotalquantityIncrement(product));
        dispatch(addtocart(product));
    }

    return (
        <>
            <div className="product-item">
                <div className="product-label">{product.details.tag}</div>
                <img
                    className="product-item-img"
                    src={product.details.image}
                    alt=""
                />
                <div className="product-item-details">
                    <p className="product-item-title">{product.name}</p>
                    <div className="line"></div>
                    <h3 className="product-item-price">
                        ${product.details.price}
                    </h3>
                    <button onClick={() => { Addtocart(product) }}>Add To Cart</button>
                </div>
            </div>
        </>
    )
}