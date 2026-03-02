import Navbar from "../components/Navbar";
import { useProductsBackendless } from '../useProductsCompany';


export default function ProductPageCompany() {
    const { products, loading, error } = useProductsBackendless();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Gagal memuat produk: {error}</div>;

    return (
        <>
            <Navbar />
            {products.length === 0 && <div className='px-20 py-6'>Belum ada produk.</div>}
            <section className='grid grid-cols-5 px-20 py-10 gap-3'>
                {products.map((item, index: number) => (
                    <div key={item.objectId || index} className='bg-gray-100 p-3 flex flex-col h-full'>
                        <div className='h-[200px] overflow-hidden flex-shrink-0'>
                            <img
                                className='w-full h-full object-cover'
                                src={item.imageurl}
                            />
                        </div>
                        <div className="flex-grow ">
                            <h3 className="font-bold text-l p-2">{item.name}</h3>
                        </div>

                        <h4 className='text-s pl-2 '>Rp.{item.price.toLocaleString('id-ID')}</h4>
                        <button className='btn bg-[#7e2727] text-white mt-3 w-full '>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </section>
        </>
    )
}