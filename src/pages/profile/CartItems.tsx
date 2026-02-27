import Navbar from "./components/Navbar";
import useTotalCartStore from '../../stores/useTotalCartStore';

export default function CartItems () {
    // Perbaiki cara akses state
    const cartItems = useTotalCartStore(state => state.itemsCart);
    const removeFromCart = useTotalCartStore(state => state.removeFromCart)

    return (
        <>
        <Navbar/>
        <h1 className="text-green-800 text-xl p-8 font-bold ">Cart Item</h1>
        {cartItems.length === 0 && <p className="p-8 text-gray-500">Cart kosong.</p>}
        {cartItems.map(item => (
            <div key={item.id} className="flex justify-between p-8">
            <div className="flex">
                <img  src={item?.imageurl} className="mx-8 bg-white border h-[100px] w-[100px]"/>
                
                <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-500">Rp.{item.price.toLocaleString()}</p>
                </div>
            </div>
            <div className="flex">
                <div>
                    <p className="text-gray-500">x{item.quantity}</p>
                    <p className="text-gray-500">Rp.{(item.price * item.quantity).toLocaleString()}</p>
                </div>
                <div>

                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-1 py-1 rounded ml-4 shadow-md"
                    >
                        Hapus
                    </button>
                </div>
            </div>
            </div>
        ))}
        </>
    )
}