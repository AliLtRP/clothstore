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
      const cart = [...state.cart, item];
      const quantities = cart.map(item => item.quantity || 1);
      return { cart, quantities };
    }),
    setAddress: (address) => set(() => ({ address })),
    setCityAndCountry: (city, country) => set(() => ({ selectedCity: city, selectedCountry: country })),
    incrementQuantity: (index) => set((state) => {
      const newQuantities = [...state.quantities];
      newQuantities[index] += 1;
      return { quantities: newQuantities };
    }),
    decrementQuantity: (index) => set((state) => {
      const newQuantities = [...state.quantities];
      if (newQuantities[index] > 0) {
        newQuantities[index] -= 1;
      }
      return { quantities: newQuantities };
    }),
    calculateTotalPrice: () => {
      const { cart, quantities } = get();
      return cart.reduce((acc, item, index) => acc + item.price * (quantities[index] || 1), 0);
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
