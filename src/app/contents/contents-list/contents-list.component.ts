import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';

import { ContentsViewDialogComponent } from "../contents-view-dialog/contents-view-dialog.component";

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-contents-list',
  templateUrl: './contents-list.component.html',
  styleUrls: ['./contents-list.component.css']
})
export class ContentsListComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;
  perioid: PeriodicElement[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  _tabName: string;
  @Input()
  set tabName(value: string){
    this._tabName = value;
  }
  constructor(public dialog: MatDialog ) { 
    this.perioid = ELEMENT_DATA;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.perioid);
    //this.dataSource.paginator = this.paginator;
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  ngOnInit() {
  }
  
  rowSelect(row) {
    const dialogRef = this.dialog.open(ContentsViewDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result : ${result}`);
    });
  }
}
