import { Component, OnInit } from '@angular/core';
import { TableServiceService } from './table-service.service';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-manual-distribution',
  templateUrl: './manual-distribution.component.html',
  styleUrls: ['./manual-distribution.component.css']
})
export class ManualDistributionComponent implements OnInit {

  public person;
  public errorMsg;
  isAutomaticTableSelected=true;
  dollars=23.34;
  constructor(private _tableService:TableServiceService,private _validationService: ValidationService) { }

  ngOnInit() {
    this._tableService.getPersons()
      .subscribe(data => this.person = data
                 );
        
  }

validateDollars(event:KeyboardEvent)
{
  if(this._validationService.validateDecimalNumber(this.dollars))
  {
    console.log('mathched' + this.dollars);
    
  }
  else
  {
    
    console.log('not-mathched'+ this.dollars);}
  
}  
  automaticTableSelected()
  {
    this.isAutomaticTableSelected=true;
  }
  manualTableSelected()
  {
    this.isAutomaticTableSelected=false;
  }


}
