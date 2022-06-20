import { Injectable } from '@nestjs/common';

@Injectable()
export default class PowerService {

    supplyPower(watts: number) {
        console.log(`Supplying ${watts} of power...`)
    }

}
