import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  
  decimalNumberRegEx:RegExp=/^(\d+\.)?\d{1,2}$/;
  constructor() { }

  public validateDecimalNumber(inputParam: number)
  {
    return inputParam.toString().match(this.decimalNumberRegEx);
  }
}
