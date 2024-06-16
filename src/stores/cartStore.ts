import { create } from "zustand";

export interface CartStore {
  title: string;
  price: number;
  item: number;
  image: string;
}
export const useCartStore = create((set) => {
  return {
    cart: [] as CartStore[],
    addToCart: (data: CartStore) => {
      console.log(data);

      const found = set((state: { cart: CartStore[] }) => {
        const index = state.cart.findIndex(
          (x: CartStore) => x.title === data.title,
        );
        if (index !== -1) {
          state.cart[index].item += data.item;
          return state.cart;
        } else {
          return { cart: [...state.cart, data] };
        }
      });
    },
    removeFromCart: (data: CartStore) =>
      set((state: { cart: CartStore[] }) => ({
        cart: state.cart.filter((item: CartStore) => item.title !== data.title),
      })),
  };
});
