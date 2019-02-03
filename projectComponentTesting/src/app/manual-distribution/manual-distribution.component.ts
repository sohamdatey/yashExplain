import { Component, OnInit } from '@angular/core';
import { TableServiceService } from './table-service.service';

@Component({
  selector: 'app-manual-distribution',
  templateUrl: './manual-distribution.component.html',
  styleUrls: ['./manual-distribution.component.css']
})
export class ManualDistributionComponent implements OnInit {

  public person;
  public errorMsg;
  
  constructor(private _tableService:TableServiceService) { }

  ngOnInit() {
    this._tableService.getPersons()
      .subscribe(data => this.person = data
                 );
        
  }
  isAutomaticTableSelected=true;

  automaticTableSelected()
  {
    this.isAutomaticTableSelected=true;
  }
  manualTableSelected()
  {
    this.isAutomaticTableSelected=false;
  }


}
