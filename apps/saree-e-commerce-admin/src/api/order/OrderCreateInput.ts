import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
  payment?: PaymentWhereUniqueInput | null;
  status?: "Option1" | null;
};
