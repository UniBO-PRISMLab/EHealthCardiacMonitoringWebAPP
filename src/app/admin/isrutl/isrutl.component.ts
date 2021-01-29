import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

import { MysqlService } from '../../mysql.service';
import { User } from '../../aut/user';

@Component({
  selector: 'app-isrutl',
  templateUrl: './isrutl.component.html',
  styleUrls: ['./isrutl.component.css']
})
export class IsrutlComponent implements OnInit {

  util: User={
    PID: "",
    Password: "",
    Email: "",
    nome: "",
    cognome: "",
    num_tel: "",
    Categoria: ""
  };

  utltp = ['admin','Infermiere','Medico'];


  constructor(private mysqlservice: MysqlService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //console.log(this.userForm.value);
  console.log(this.util);
  this.mysqlservice.isrutl(this.util).subscribe((msg:any)=>{console.log(msg);if(msg==null){window.alert("Utilizzatre inserito");}});
 }

}
