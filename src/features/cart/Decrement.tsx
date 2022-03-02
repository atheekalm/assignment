import { product } from "../../app/models/models";
import { useAppDispatch } from "../../app/store/Configurestore";
import { carttotalquantityDecrement } from "../products/cartSlice";

interface pro {
    item: product
}


export default function Decrement({ item }: pro) {
    const dispatch = useAppDispatch();

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='plus-icon'
            onClick={() => dispatch(carttotalquantityDecrement(item))}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M18 12H6'

            />
        </svg>
    );
}
