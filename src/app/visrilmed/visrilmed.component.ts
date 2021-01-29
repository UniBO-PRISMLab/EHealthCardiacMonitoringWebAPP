import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MysqlService } from '../mysql.service';
import { Paz } from '../inf/paz';



@Component({
  selector: 'app-visrilmed',
  templateUrl: './visrilmed.component.html',
  styleUrls: ['./visrilmed.component.css']
})
export class VisrilmedComponent implements OnInit {

    paz : Paz;
    src=false;

    pazForm = new FormGroup({
       id: new FormControl(''),
     });

    constructor(private mysqlservice: MysqlService) { }

  ngOnInit(): void {
    }

    onSubmit(): void {
      //console.log(this.userForm.value);
      this.paz=null;
      this.src=true;
      this.mysqlservice.srcpaz(this.pazForm).subscribe((paz:Paz | any)=>{{if (paz!=false) {this.paz=paz;} else {this.paz=null;}};console.log(this.paz);if (!this.paz){
        window.alert("Paziente non presente");} });
   }

}
