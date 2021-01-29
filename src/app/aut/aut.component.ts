import { Component, OnInit, ViewChild} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


import { MysqlService } from '../mysql.service';
import { User } from './user';


@Component({
  selector: 'app-aut',
  templateUrl: './aut.component.html',
  styleUrls: ['./aut.component.css']
})
export class AutComponent implements OnInit {

  constructor(private mysqlservice: MysqlService, private router: Router) { }

  ngOnInit(): void {
  //  this.mysqlservice.insril();
    const pid = this.userForm.get('pid');
    pid.valueChanges.subscribe(() => {
    pid.patchValue(pid.value.toUpperCase(), {emitEvent: false});
  });
  }


  private user: User;


  userForm = new FormGroup({
     pid: new FormControl(''),
     pwd: new FormControl(''),
   });

   onSubmit(): void {
     //console.log(this.userForm.value);
    this.mysqlservice.getuser(this.userForm).subscribe((user: User | any)=>{this.user=user;this.mysqlservice.user=user;console.log(this.mysqlservice.user);if (user==false){
      window.alert("Utente non presente o Password errata");};if(this.user.Categoria=="admin"){this.router.navigate(['/admin']);};if(this.user.Categoria=="Infermiere"){this.router.navigate(['/inf']);};
    if(this.user.Categoria=="Medico"){this.router.navigate(['/med']);} });
  }
}
