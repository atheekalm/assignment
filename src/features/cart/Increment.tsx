import { product } from "../../app/models/models";
import { useAppDispatch } from "../../app/store/Configurestore";
import { carttotalquantityIncrement } from "../products/cartSlice";
interface pro{
    item:product
}
export default function Increment({item}:pro) {
    const dispatch = useAppDispatch();
    

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='plus-icon'
            onClick={() => dispatch(carttotalquantityIncrement(item))}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
        </svg>
    );
}