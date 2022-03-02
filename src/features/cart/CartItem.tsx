import { useAppSelector } from "../../app/store/Configurestore";
import Decrement from "./Decrement";
import Increment from "./Increment";

export default function CartItem() {
    const cart  = useAppSelector(state => state.cart.cartItems);
    const cartItems = Array.from(new Set(cart));
    console.log(cart);
    return (
        <>
            {cartItems.map((item) => (
                <div className='cart-item' key={item.id}>
                    <img
                        src={item.details.image}
                        alt=''
                        width='80'
                    />
                    <div className='cart-item-details'>
                        <p className='cart-item-name'>
                            {item.name}
                        </p>
                        <p>{item.details.type}</p>
                        <p>{item.cartquantity}</p>
                    </div>
                    <div className='cart-price'>
                        <p className='cart-cross'>x</p>
                        <p className='price'>$ {item.details.price}</p>
                        <div>
                            <Increment item={item}/>
                            <Decrement item={item}/>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}


