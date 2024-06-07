import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  payment?: PaymentWhereUniqueInput;
  status?: "Option1";
};
