import { create } from 'zustand';

const useCartStore = create((set,get) => ({
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
    const quantities = cart.map(item => item.quantity); 
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
    return cart.reduce((acc, item, index) => acc + item.price * quantities[index], 0);
  },
  setOrderDetails: (checkoutData) => set(() => ({ orderDetails: checkoutData })),
}));

export default useCartStore;

