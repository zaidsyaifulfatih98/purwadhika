import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UseTotalCart = {
  totalCart: number;
  itemsCart: any[];
  addToCart: (newItem: any) => void;
  removeFromCart: (id: string) =>void
};

const useTotalCartStore = create<UseTotalCart>()(
  persist(
    (set) => ({
      totalCart: 0,
      itemsCart: [],
      
      addToCart: (newItem) =>
        set((state: any) => {
          const currentItemsCart = [...state?.itemsCart];
          const findItem = currentItemsCart?.findIndex(
            (item: any) => item?.id === newItem?.id,
          );
          if (currentItemsCart?.length === 0) {
            return {
              totalCart: state?.totalCart + 1,
              itemsCart: [{ ...newItem, quantity: 1 }],
            };
          }
          if (findItem === -1) {
            return {
              totalCart: state?.totalCart + 1,
              itemsCart: [...currentItemsCart, { ...newItem, quantity: 1 }],
            };
          } else {
            currentItemsCart[findItem].quantity += 1;
            return {
              itemsCart: [...currentItemsCart],
            };
          }
        }),
      removeFromCart: (id) => 
        set((state:any) => {
          const filtered = state.itemsCart.filter((item:any) => item.id !== id);
          return{
            itemsCart : filtered,
            totalCart : filtered.length,
          }
        })
      
    }),
    {
      name: 'cart-store', 
    }
  )
);

export default useTotalCartStore;