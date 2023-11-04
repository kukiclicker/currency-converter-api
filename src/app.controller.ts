import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpStatusCode } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  async getExchangeRates(){
   return "Hello kukz!";
  }
  @Post()
  async convert(@Body('amount') amount:number,
  @Body('amount-currency')amountCurrency:string,
  @Body('target-currency') targetCurrency:string,
  )
  {
    var exchangeRates = await this.appService.getExchangeRates();
    var rates = exchangeRates.rates;

    var result = (amount/rates[amountCurrency])*rates[targetCurrency];
    return {
      amount:result,
      currency:targetCurrency,
    }
  }

  
}
