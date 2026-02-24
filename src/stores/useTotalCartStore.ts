import { create } from 'zustand';

const useTotalCartStore = create((set) => ({
    totalCart: 0, 
    addToCart: (newTotal: number) => set((state: any) => ({totalCart: newTotal}))
}));

export default useTotalCartStore; 