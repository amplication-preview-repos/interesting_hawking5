import { Module } from "@nestjs/common";
import { DeliveryPersonModuleBase } from "./base/deliveryPerson.module.base";
import { DeliveryPersonService } from "./deliveryPerson.service";
import { DeliveryPersonController } from "./deliveryPerson.controller";
import { DeliveryPersonResolver } from "./deliveryPerson.resolver";

@Module({
  imports: [DeliveryPersonModuleBase],
  controllers: [DeliveryPersonController],
  providers: [DeliveryPersonService, DeliveryPersonResolver],
  exports: [DeliveryPersonService],
})
export class DeliveryPersonModule {}
