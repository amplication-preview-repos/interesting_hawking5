import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerUpdateManyWithoutCustomersInput } from "./CustomerUpdateManyWithoutCustomersInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  customers?: CustomerUpdateManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
};
