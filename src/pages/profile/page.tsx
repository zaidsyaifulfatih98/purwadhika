import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductsSection from './components/ProductsSection';
import { useProductsBackendless } from './components/useProductBackendless';



function HomePage() {
  const [totalCarts, setTotalCarts] = useState<number>(0); 

  const onHandleCarts = () => {
    setTotalCarts(totalCarts + 1)
  }

  const { products, loading, error } = useProductsBackendless();

  if (loading) return <div>Loading...</div>;
  if (error) {
    return (
      <>
        <Navbar />
        <div className='p-6 text-red-600'>Gagal memuat produk: {error}</div>
      </>
    );
  }
  
  return (
    <>
      <Navbar/>
      {/* <Navbar totalCarts={totalCarts} /> */}
      {products.length === 0 && (
        <div className='p-6'>Belum ada produk untuk ditampilkan.</div>
      )}
      <ProductsSection products={products} onHandleCarts={onHandleCarts} />
    </>
  );
}

export default HomePage;