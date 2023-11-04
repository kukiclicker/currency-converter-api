import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  private apiUrl = 'https://openexchangerates.org/api/latest.json';
  private apiKey = "f7fe6547e93f4f36b7a4794056d1b613";

  async getExchangeRates(){
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          app_id: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
