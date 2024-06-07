import { OrderUpdateManyWithoutPaymentsInput } from "./OrderUpdateManyWithoutPaymentsInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  method?: "Option1" | null;
  orders?: OrderUpdateManyWithoutPaymentsInput;
  status?: "Option1" | null;
};
