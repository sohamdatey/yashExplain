import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-automatic-table',
  templateUrl: './automatic-table.component.html',
  styleUrls: ['./automatic-table.component.css']
})
export class AutomaticTableComponent implements OnInit {


  @Input() person;
  constructor() { }

  ngOnInit() {
  }

}
