import { Component, OnInit ,Input} from '@angular/core';
import { IPerson } from '../iperson';

@Component({
  selector: 'app-manual-table',
  templateUrl: './manual-table.component.html',
  styleUrls: ['./manual-table.component.css']
})
export class ManualTableComponent implements OnInit {
  
  @Input() person: IPerson ;
  constructor() { }

  ManualCalculations()
  {
    this.person.userId=(this.person.id)*7;
  }
  ngOnInit() {
  }

}
