import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryPersonService } from "./deliveryPerson.service";
import { DeliveryPersonControllerBase } from "./base/deliveryPerson.controller.base";

@swagger.ApiTags("deliveryPeople")
@common.Controller("deliveryPeople")
export class DeliveryPersonController extends DeliveryPersonControllerBase {
  constructor(protected readonly service: DeliveryPersonService) {
    super(service);
  }
}
