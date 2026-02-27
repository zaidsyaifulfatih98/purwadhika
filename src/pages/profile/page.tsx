import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductsSection from './components/ProductsSection';
import { useProductsBackendless } from './components/useProductBackendless';



function HomePage() {
  const [totalCarts, setTotalCarts] = useState<number>(0); 

  const onHandleCarts = () => {
    setTotalCarts(totalCarts + 1)
  }

  const { products, loading } = useProductsBackendless();

  if (loading) return <div>Loading...</div>;
  
  return (
    <>
      <Navbar/>
      {/* <Navbar totalCarts={totalCarts} /> */}
      <ProductsSection products={products} onHandleCarts={onHandleCarts} />
    </>
  );
}

export default HomePage;