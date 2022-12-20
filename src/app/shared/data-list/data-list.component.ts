import { Component, OnInit, Input } from '@angular/core';
import { IListColumn } from './list.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  @Input() data!: [];
  @Input() columnConfig!:IListColumn [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.columnConfig);
  }

}
