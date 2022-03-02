import { productsprops } from "../../app/models/models";
import Products from "../products/products";




export default function Home({ products }: productsprops) {

    return (
        <>
            <div className="main flex-70">
                <Products products={products} />
            </div>
        </>
    )
}