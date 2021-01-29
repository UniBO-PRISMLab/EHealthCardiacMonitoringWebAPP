import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


import { MysqlService } from '../mysql.service';
import { User } from '../aut/user';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

util :User;
src=false;

utilForm = new FormGroup({
   pid: new FormControl(''),
 });

  constructor(private mysqlservice: MysqlService) { }

  ngOnInit(): void {
    const pid = this.utilForm.get('pid');
    pid.valueChanges.subscribe(() => {
    pid.patchValue(pid.value.toUpperCase(), {emitEvent: false});
});
  }

  onSubmit(): void {
    //console.log(this.userForm.value);
this.util=null;
    this.src=true;
    this.mysqlservice.srcpid(this.utilForm).subscribe((user:User| any)=>{{if (user!=false) {this.util=user;} else {this.util=null;}};console.log(this.util);{if (!this.util){
      window.alert("Utilizzatore non presente");}} });
 }
}
