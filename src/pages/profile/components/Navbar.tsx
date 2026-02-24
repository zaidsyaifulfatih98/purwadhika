import { LuShoppingCart } from 'react-icons/lu';
import useTotalCartStore from '../../../stores/useTotalCartStore';

export default function Navbar(props: any) {
  const {totalCart} = useTotalCartStore()
  return (
    <header className='flex items-center justify-between gap-3 bg-gray-100 p-3'>
      <div className='flex items-center gap-3'>
        {/* Left */}
        <h1 className='text-3xl font-bold text-green-700'>tokopedia</h1>
        <h2>Kategori</h2>
      </div>
      <div className='flex-1'>
        {/* Center */}
        <label className='input rounded-xl w-full'>
          <svg
            className='h-[1em] opacity-50'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <g
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2.5'
              fill='none'
              stroke='currentColor'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <path d='m21 21-4.3-4.3'></path>
            </g>
          </svg>
          <input type='search' className='grow' placeholder='Search' />
        </label>
      </div>
      <div className='flex items-center gap-3'>
        {/* Right */}
        <div className='relative w-8 h-10 flex items-center'>
          <LuShoppingCart className='text-2xl' />
          <button className='absolute top-0 right-0 bg-red-500 text-white w-5 h-5 rounded-full flex justify-center items-center text-xs'>
            {/* {props?.totalCarts} */}
            {totalCart}
          </button>
        </div>
        <button className='btn btn-active btn-success'>Login</button>
        <button className='btn btn-active btn-success'>Register</button>
      </div>
    </header>
  );
}