import { productsprops } from "../../app/models/models";
import Product from "./product";

export default function Products({ products }: productsprops) {
    // const dispatch = useAppDispatch();

    // function handlecart(product: pro) {
    //     dispatch(addtocart(product));
    //     dispatch(carttotalqu(1));
    //     dispatch(totalamount(product.details.price));

    // }
    return (
        <>
            {products.map(product => (
                <Product key={product.id} product={product}/>
            ))}
        </>
    )
}
