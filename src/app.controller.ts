import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpStatusCode } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async convert(@Body('amount') amount:number,
  @Body('amount-currency')amountCurrency:string,
  @Body('target-currency') targetCurrency:string,
  )
  {
    var exchangeRates = await this.appService.getExchangeRates();
    var rates = exchangeRates.rates;
    if(!amount||!amountCurrency||!targetCurrency){
      throw new BadRequestException('You must provide amount, amount currency and target currency!');
    }
    var result = (amount/rates[amountCurrency])*rates[targetCurrency];
    if(result){
      return {
        amount:result,
        currency:targetCurrency,
      }
    }else{
      throw new BadRequestException('Invalid amount currency or target currency!');
    }
    
  }

  
}
