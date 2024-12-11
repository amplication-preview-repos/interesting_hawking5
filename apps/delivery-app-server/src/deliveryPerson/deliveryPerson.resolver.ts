import * as graphql from "@nestjs/graphql";
import { DeliveryPersonResolverBase } from "./base/deliveryPerson.resolver.base";
import { DeliveryPerson } from "./base/DeliveryPerson";
import { DeliveryPersonService } from "./deliveryPerson.service";

@graphql.Resolver(() => DeliveryPerson)
export class DeliveryPersonResolver extends DeliveryPersonResolverBase {
  constructor(protected readonly service: DeliveryPersonService) {
    super(service);
  }
}
