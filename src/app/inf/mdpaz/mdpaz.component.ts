import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { MysqlService } from '../../mysql.service';
import { Paz } from '../paz';
import { User} from '../../aut/user';


@Component({
  selector: 'app-mdpaz',
  templateUrl: './mdpaz.component.html',
  styleUrls: ['./mdpaz.component.css']
})
export class MdpazComponent implements OnInit {

  @Input() paz: Paz;
  @Input() med: User[];

  sss=["M","F"];
  clgr=['alta','media', 'bassa'];
  tplg=["LVAD HM3","LVAD HVAD","NO LVAD"];
  md: String []=[];

  constructor(private mysqlservice: MysqlService) { }

  ngOnInit(): void {
    for (var i = 0; i < this.med.length; i++){
      this.md.push( this.med[i].PID);
    }
  }

  onSubmit(): void {
    //console.log(this.userForm.value);
  console.log(this.paz);

  this.mysqlservice.mdpaz(this.paz).subscribe((msg:any)=>{console.log(msg);if(msg==null){window.alert("Paziente modificato");}});
 }

}
