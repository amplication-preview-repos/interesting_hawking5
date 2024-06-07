import { Customer } from "../customer/Customer";
import { OrderItem } from "../orderItem/OrderItem";
import { Payment } from "../payment/Payment";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  orderDate: Date | null;
  orderItems?: Array<OrderItem>;
  payment?: Payment | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
