import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../person';
@Component({
  selector: 'app-manual-table',
  templateUrl: './manual-table.component.html',
  styleUrls: ['./manual-table.component.css']
})
export class ManualTableComponent implements OnInit {

  @Input() public person:IPerson;
  constructor() { }

  ngOnInit() {
  }

}
