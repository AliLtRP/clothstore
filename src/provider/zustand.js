import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useCartStore = create(persist(
  (set, get) => ({
    cart: [],
    quantities: [],
    selectedCity: null,
    selectedCountry: '',
    address: '',
    orderDetails: {
      cart: [],
      quantities: [],
      totalPrice: 0,
      address: '',
      selectedCity: '',
      selectedCountry: '',
    },
    addToCart: (item) => set((state) => {
      const existingCart = Array.isArray(state.cart) ? state.cart : [];
      const existingItemIndex = existingCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        const newCart = [...existingCart];
        newCart[existingItemIndex].quantity += item.quantity;
        return { cart: newCart };
      } else {
        return { cart: [...existingCart, item] };
      }
    }),
    removeFromCart: (itemId) => set((state) => {
      const existingCart = Array.isArray(state.cart) ? state.cart : [];
      const newCart = existingCart.filter(item => item.id !== itemId);
      return { cart: newCart };
    }),
    setAddress: (address) => set(() => ({ address })),
    setCityAndCountry: (city, country) => set(() => ({ selectedCity: city, selectedCountry: country })),
    incrementQuantity: (index) => set((state) => {
      const existingCart = Array.isArray(state.cart) ? state.cart : []; // Ensure state.cart is an array
      const newCart = [...existingCart];
      newCart[index].quantity += 1;
      return { cart: newCart };
    }),
    decrementQuantity: (index) => set((state) => {
      const existingCart = Array.isArray(state.cart) ? state.cart : []; // Ensure state.cart is an array
      const newCart = [...existingCart];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      }
      return { cart: newCart };
    }),
    calculateTotalPrice: () => {
      const { cart } = get();
      if(cart.length === 0) {
        return 0
      }
      return cart[0].final_price * cart[0].quantity;
    },
    setOrderDetails: (checkoutData) => set(() => ({ orderDetails: checkoutData })),
    setCart: (cart) => set({ cart }),
    setQuantities: (quantities) => set({ quantities }),
    clearCart: () => set({ cart: [], quantities: [], address: '', selectedCity: null, selectedCountry: '' }),
  }),
  {
    name: 'cartstorage',
    storage: createJSONStorage(() => localStorage),
  }
));


export const useRelated = create(
  persist(
    (set) => ({
      items: [],
      setItems: (items) => set({ items }),
    }),
    {
      name: 'related-storage', 
      getStorage: () => localStorage,
    }
  )
);

export const useItemStore = create((set) => ({
  item: null,
  setItem: (item) => set({ item }),
}));

export default useCartStore;
