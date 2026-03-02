export const getCart = () => {
  localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

const saveCart = () => {
  sessionStorage.setItem('cart' , JSON.stringify(cart))
}

const updateCartCount = () => {
  const cart = getCart()
  
  const totalItems = cart.reduce()
  
}
