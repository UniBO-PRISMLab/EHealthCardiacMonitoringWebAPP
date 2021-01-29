import { Component, OnInit, Input } from '@angular/core';

import { NgForm, FormsModule } from '@angular/forms';

import { MysqlService } from '../../mysql.service';
import { User } from '../../aut/user';

@Component({
  selector: 'app-mdfutl',
  templateUrl: './mdfutl.component.html',
  styleUrls: ['./mdfutl.component.css']
})
export class MdfutlComponent implements OnInit {

  @Input() util: User;

  utltp = ['admin','Infermiere','Medico'];

  constructor(private mysqlservice: MysqlService) { }

  ngOnInit(): void {
    console.log(this.util);
    this.util.Password='';
  }


  onSubmit(): void {
    //console.log(this.userForm.value);
  console.log(this.util);

  this.mysqlservice.mdrutl(this.util).subscribe((msg:any)=>{console.log(msg);if(msg==null){window.alert("Utilizzatre modificato");}});
 }

}
