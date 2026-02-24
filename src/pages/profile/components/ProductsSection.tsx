import useTotalCartStore from "../../../stores/useTotalCartStore";
export default function ProductsSection(props: any) {
  const {addToCart} = useTotalCartStore()
  return (
    <section className='grid grid-cols-6 px-20 py-10 gap-3'>
      {props?.products?.map((item: any, index: any) => {
        return (
          <div className='bg-gray-100 p-3'>
            <div className='h-[200px] overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src='https://allofresh.id/blog/wp-content/uploads/2023/08/merek-minyak-goreng-4.jpg'
              />
            </div>
            <h3>{item?.name}</h3>
            <h4 className='font-bold text-2xl'>
              Rp.{item?.price?.toLocaleString('id-ID')}
            </h4>
            <div className='text-xs'>{item?.city}</div>
            <button 
              // onClick={() => props?.onHandleCarts()}
              onClick={() => addToCart(100)}
            className='btn bg-green-700 text-white mt-3 w-full'>
              Add to Cart
            </button>
          </div>
        );
      })}
    </section>
  );
}