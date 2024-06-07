import { Order } from "../order/Order";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  method?: "Option1" | null;
  orders?: Array<Order>;
  status?: "Option1" | null;
  updatedAt: Date;
};
