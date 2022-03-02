import Home from '../../features/home/home';
import './style.css';
import Cart from '../../features/cart/Cart';
import { useEffect } from 'react';
import { getProducts, productSelectors } from '../../features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../store/Configurestore';
import SideNav from './sidebar/Sidebar';

export default function App() {
  const products = useAppSelector(productSelectors.selectAll);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <>
      <div className="wrapper-content flex-display space-between">
        <SideNav products={products} />
        <Home products={products} />
        <Cart />
      </div>
    </>
  );
}
