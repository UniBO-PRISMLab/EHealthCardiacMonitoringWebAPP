import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MysqlService } from '../mysql.service';
import { Paz } from '../inf/paz';
import { User} from '../aut/user'



@Component({
  selector: 'app-gestpaz',
  templateUrl: './gestpaz.component.html',
  styleUrls: ['./gestpaz.component.css']
})
export class GestpazComponent implements OnInit {

  med : User[];
  paz : Paz;
  src=false;

  pazForm = new FormGroup({
     id: new FormControl(''),
   });

  constructor(private mysqlservice: MysqlService) { }

  ngOnInit(): void {
    this.mysqlservice.getAllmed().subscribe((user: User [] | any)=>{{if (user!=false) {this.med=user;console.log(this.med);} else {this.med=null;window.alert("Utilizzatori Medici non presenti");}};
  });
}

  onSubmit(): void {
    this.paz=null;
    this.src=true;
    this.mysqlservice.srcpaz(this.pazForm).subscribe((paz:Paz | any)=>{{if (paz!=false) {this.paz=paz;} else {this.paz=null;}};console.log(this.paz);if (!this.paz){
      window.alert("Paziente non presente");} });
 }

}
