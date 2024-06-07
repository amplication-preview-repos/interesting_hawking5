import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  paymentId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
