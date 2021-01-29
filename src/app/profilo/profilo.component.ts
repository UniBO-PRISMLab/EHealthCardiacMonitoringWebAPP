import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { MysqlService } from '../mysql.service';
import { User } from '../aut/user';
import { Np } from './np';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  user: User;


  uppwdForm = new FormGroup({
    pwd : new FormControl('', Validators.minLength(4)),
    rpwd : new FormControl('', Validators.minLength(4)),
  });

  np: Np = {
    PID: "",
    password: ""
  };


  constructor(private mysqlservice: MysqlService) { }

  ngOnInit(): void {
    this.user=this.mysqlservice.user;
    console.log(this.user);
  }


  onSubmit(): void {

console.log(this.uppwdForm.value);
if (this.uppwdForm.get('pwd').value!=this.uppwdForm.get('rpwd').value) {
  window.alert("password non corrispondono");
}
else {
  console.log(this.user.PID);
  this.np.PID=this.user.PID;
  this.np.password=this.uppwdForm.get('pwd').value;
  console.log(this.np);
  this.mysqlservice.uppwd(this.np).subscribe((msg:any)=>{console.log(msg);if(msg==null){
    window.alert("Password modificata");};});
 }

}
}
