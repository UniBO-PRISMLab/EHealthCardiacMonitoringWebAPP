import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, throwError, of as observableOf, merge} from 'rxjs';
import { Rilev } from '../inf/rilev';
import { User } from '../aut/user';
import { MysqlService } from '../mysql.service';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';


@Component({
  selector: 'app-visrilinf',
  templateUrl: './visrilinf.component.html',
  styleUrls: ['./visrilinf.component.css']
})
export class VisrilinfComponent implements  OnInit  {

columnsToDisplay = ['ID', 'ID_paz', 'data', 'peso', 'frequenza', 'pressione', 'passi', 'rpm', 'watt', 'flusso', 'picco', 'depressione', 'PI', 'allarme', 'allarme_aut', 'nota'];


ril:Rilev;
rilev: Rilev []=[];
dataSource: MatTableDataSource<Rilev>;


 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: true}) sort: MatSort;


//columnsToDisplay = ['ID', 'ID_paz', 'data', 'peso', 'frequenza', 'pressione', 'passi', 'rpm', 'watt', 'flusso', 'picco', 'depressione', 'PI', 'allarme', 'allarme_aut', 'nota'];

  constructor(private mysqlservice: MysqlService, private router: Router) {
    //this.mysqlservice.srcril().subscribe((msg:Rilev [] | any)=>{this.rilev=msg;console.log(msg);if(!msg){window.alert("Assenza Rilevazioni non validate");}});
    //this.dataSource = new MatTableDataSource(this.rilev);
    this.mysqlservice.srcril().subscribe((msg:Rilev [] | any)=>{this.rilev=msg;
    this.dataSource=new MatTableDataSource(this.rilev);this.dataSource.sort = this.sort;this.dataSource.paginator = this.paginator;console.log(msg);if(!msg){window.alert("Assenza Rilevazioni non validate");}});
  }

  ngOnInit(): void {
      //this.dataSource.sort = this.sort;
  //this.mysqlservice.srcril().subscribe((msg:Rilev [] | any)=>{this.rilev=msg;
  //this.dataSource=new MatTableDataSource(this.rilev); this.dataSource.sort = this.sort;this.dataSource.paginator = this.paginator;console.log(msg);if(!msg){window.alert("Assenza Rilevazioni non validate");}});

    //  this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;

  }


  onRowClicked(row) {
      console.log('Row clicked: ', row);
      this.router.navigate(['/inf/pazst/'+row.ID_paz]);
  }

}
