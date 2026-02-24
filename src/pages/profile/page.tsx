import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductsSection from './components/ProductsSection';

const products = [
  {
    id: 1,
    name: 'Minyak Sunco 2L',
    price: 40000,
    city: 'Kab. Sidoarjo',
  },
  {
    id: 2,
    name: 'Apel Malang',
    price: 35000,
    city: 'Kab. Malang',
  },
];

function HomePage() {
  const [totalCarts, setTotalCarts] = useState<number>(0); 

  const onHandleCarts = () => {
    setTotalCarts(totalCarts + 1)
  }
  return (
    <>
      <Navbar totalCarts={totalCarts} />
      <ProductsSection products={products} onHandleCarts={onHandleCarts} />
    </>
  );
}

export default HomePage;