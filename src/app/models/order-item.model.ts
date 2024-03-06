// OrderItem interface (for items within an order)
export interface OrderItem {
  menuItemId: number;
  quantity: number;
  price: number; // price at the time of order or total price for this item
}
