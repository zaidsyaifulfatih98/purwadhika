import { useEffect } from 'react';
import useTotalCartStore from '../../../stores/useTotalCartStore';
export default function ProductsSection(props: any) {
  const { addToCart, totalCart, itemsCart } = useTotalCartStore();

  // React Hooks: Use Effect

  // Use Effect mirip seperti ComponentDidUpdate: Men-trigger fn useEffect ketika terjadi perubahan props/data
  useEffect(() => {
    localStorage.setItem('totalCarts', JSON.stringify(totalCart));
  }, [totalCart]);

  useEffect(() => {
    console.log(itemsCart)
  }, [itemsCart])

  return (
    <section className='grid grid-cols-6 px-20 py-10 gap-3'>
      {props?.products?.map((item: any, index: any) => {
        return (
          <div className='bg-gray-100 p-3' key={item.objectId}>
            <div className='h-[200px] overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src={item?.imageurl}
              />
            </div>
            <h3>{item?.name}</h3>
            <h4 className='font-bold text-2xl'>
              Rp.{item?.price?.toLocaleString('id-ID')}
            </h4>
            <div className='text-xs'>{item?.city}</div>
            <button
              // onClick={() => props?.onHandleCarts()}
              onClick={() => addToCart({
                id: item.objectId,       
                name: item.name,
                price: item.price,
                city: item.city,
                imageurl: item.imageurl,
              })}
              className='btn bg-green-700 text-white mt-3 w-full'
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </section>
  );
}