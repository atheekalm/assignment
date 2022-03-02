import { useState } from "react";
import { useAppSelector } from "../../app/store/Configurestore";
import CartItem from "./CartItem";
import ClosedCart from "./closecart";

export default function Cart() {
    const card = useAppSelector(state => state.cart)
    const [isopen, setopen] = useState(false);
    const amount = useAppSelector(state => state.cart.cartItems);

    let sum = 0;
    amount.forEach(element => {
        sum += (element.cartquantity * element.details.price);
        console.log(sum)
    });

    function open() {
        setopen(true);
    }
    function close() {
        setopen(false);
    }
    if (!isopen) {
        return <ClosedCart open={open} />
    }
    return (
        <>
            <aside className='cart'>
                <div onClick={close} className='close-btn'>
                    X
                </div>
                <div className='cart-body'>
                    <div className='cart-heading'>
                        <div className='cart-icon'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='icon'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                />
                            </svg>
                            <span className='item-count'>{card.carttotalquantity}</span>
                        </div>
                        <h2>Cart</h2>
                    </div>
                    <CartItem />

                    <div className='cart-checkout'>
                        <div>
                            <p>SUBTOTAL</p>
                            <p>$ {sum}</p>
                        </div>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </aside>
        </>
    )
}
