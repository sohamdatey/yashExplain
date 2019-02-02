import { Component, OnInit, Input } from '@angular/core';
import { TableServiceService } from '../table-service.service';
import { IPerson } from '../person';
@Component({
  selector: 'app-sampletable',
  templateUrl: './sampletable.component.html',
  styleUrls: ['./sampletable.component.css']
})
export class SampletableComponent implements OnInit {
  
  // public person;
  // public errorMsg;
  
  // constructor(private _tableService:TableServiceService) { }

  // ngOnInit() {
  //   this._tableService.getPersons()
  //     .subscribe(data => this.person = data
  //                );
        
  // }
  
  @Input() public person:IPerson;
  constructor() { }

  ngOnInit() {
  }

}
