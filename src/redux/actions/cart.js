export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZAA_CART',
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
