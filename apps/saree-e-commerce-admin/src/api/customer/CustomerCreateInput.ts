import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerCreateNestedManyWithoutCustomersInput } from "./CustomerCreateNestedManyWithoutCustomersInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  customers?: CustomerCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
};
