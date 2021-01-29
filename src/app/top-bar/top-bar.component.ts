import { Component, OnInit, Input} from '@angular/core';
import { MysqlService } from '../mysql.service';
import { User } from '../aut/user';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  user: User;


  constructor(private mysqlservice: MysqlService, private router: Router) { }

  ngOnInit(): void {
    this.user=this.mysqlservice.user;
    console.log(this.user);
  }

logout():void {
  this.mysqlservice.user=null;
  this.router.navigate(['/login']);

}

}
