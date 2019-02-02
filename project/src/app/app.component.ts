import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { TableServiceService } from './table-service.service';
import { IPerson } from './person';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

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


