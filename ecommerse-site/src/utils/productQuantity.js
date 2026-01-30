export function productQuantity(cartItems){
  let totalCount = 0;
  cartItems.forEach((item) => totalCount += item.quantity );
  return totalCount;
}