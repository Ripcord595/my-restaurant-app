// Order interface
import {OrderItem} from "./order-item.model";

export interface Order {
  id: number;
  userId?: number; // Optional, depending on if your app requires user login
  restaurantId: number;
  items: OrderItem[];
  totalPrice: number;
  status: 'ordered' | 'delivering' | 'delivered';
  orderTime: Date;
  deliveryTime?: Date; // Optional, can be null if not yet delivered
}
