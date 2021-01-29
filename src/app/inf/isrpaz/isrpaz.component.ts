import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { MysqlService } from '../../mysql.service';
import { Paz } from '../paz';
import { User} from '../../aut/user';

@Component({
  selector: 'app-isrpaz',
  templateUrl: './isrpaz.component.html',
  styleUrls: ['./isrpaz.component.css']
})
export class IsrpazComponent implements OnInit {

  paz: Paz={

    ID : 0,
    nome : "",
    cognome: "",
    num_tel: "",
    luogo_nascita: "",
    data_nascita: "",
    residenza: "",
    sesso: "",
    peso: 0,
    altezza: 0,
    class_gravita: "",
    class_NYHA: 0,
    class_INTERMACS :0,
    tipologia: "",
    PID_medico: "",
  };

@Input() med: User[];

sss = ['M','F'];
clgr=['alta','media', 'bassa'];
tplg=["LVAD HM3","LVAD HVAD","NO LVAD"];
md: String []=[];

str="Paziente inserito. ATTENZIONE MEMORIZZARE IL SEGUENTE ID PAZIENTE ID= ";

  constructor(private mysqlservice: MysqlService) { }

  ngOnInit(): void {
      for (var i = 0; i < this.med.length; i++){
        this.md.push( this.med[i].PID);
      }
  }


  onSubmit(): void {
  console.log(this.paz);
  this.mysqlservice.isrpaz(this.paz).subscribe((msg:any)=>{console.log(msg.ID);this.str=this.str+(msg.ID);window.alert(this.str);});
 }

}
