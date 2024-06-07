import { OrderCreateNestedManyWithoutPaymentsInput } from "./OrderCreateNestedManyWithoutPaymentsInput";

export type PaymentCreateInput = {
  amount?: number | null;
  method?: "Option1" | null;
  orders?: OrderCreateNestedManyWithoutPaymentsInput;
  status?: "Option1" | null;
};
