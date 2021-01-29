import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, throwError, of as observableOf, merge} from 'rxjs';
import { Rilev } from '../inf/rilev';
import { MysqlService } from '../mysql.service';
import { Terap } from '../med/terap';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { Paz } from '../inf/paz';
import { User} from '../aut/user';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-estrdati',
  templateUrl: './estrdati.component.html',
  styleUrls: ['./estrdati.component.css']
})




export class EstrdatiComponent implements OnInit {
ID_paz: number = 0;
plist : Paz [] ;
ril : Rilev [];
trp: Terap [];
pz: number []=[];
str="Pazienti trovati";
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

userForm = new FormGroup({
   dt1: new FormControl(''),
   dt2: new FormControl(''),
   idpaz: new FormControl(''),
 });


//  constructor(private mysqlservice: MysqlService) { }

constructor(private mysqlservice: MysqlService) { }

ngOnInit(): void {
  var date=new Date();
  var today= date.toISOString().substring(0,10);
//this.userForm.setValue({dt1 : today, dt2: today});
this.userForm.controls.dt1.setValue(today);
this.userForm.controls.dt2.setValue(today);
  this.mysqlservice.allpaz().subscribe((plist: Paz [] | any)=>{{if (plist!=false) {this.plist=plist;console.log(this.plist);} else {this.plist=null;window.alert("Rilevazioni non presenti");}};
  {  for (var i = 0; i < this.plist.length; i++){
    this.pz.push( this.plist[i].ID); console.log(this.pz);console.log(this.plist.length);}
  };
});



}
  onSubmit(): void {

      if(new Date(this.userForm.get('dt1').value) <= new Date(this.userForm.get('dt2').value)){
    this.userForm.controls.idpaz.setValue(this.paz.ID);
    console.log(this.userForm);
    this.mysqlservice.allril(this.userForm).subscribe((ril: Rilev [] | any)=>{{if (ril!=false) {this.ril=ril;console.log(this.ril);
    this.exportCSV(this.ril);

    }
    else {this.ril=null;window.alert("Rilevazioni non presenti");}};
  });
}
else {window.alert("Il Periodo selezionato non è valido");}
}

onSubmitrp(): void {

  this.mysqlservice.alltrp(this.ID_paz).subscribe((trp: Terap [] | any)=>{{if (trp!=false) {this.trp=trp;console.log(this.trp);
  //this.terapieCSV();
this.exportCSV(this.trp);
  }
  else {this.trp=null;window.alert("Terapie non presenti");}};
});
}



 exportCSV(x: any[]) :void {
   console.log("x è "+ x);
  let csv="";
  let keysAmount = Object.keys(x[0]).length
  let keysCounter = 0
  for(let key in x[0]){

                      // This is to not add a comma at the last cell
                      // The '\r\n' adds a new line
      csv += key + (keysCounter+1 < keysAmount ? ',' : '\r\n' )
      keysCounter++
  }

  // Loop the array of objects
  for(let row = 0; row < x.length; row++){
keysCounter = 0
         for(let key in x[row]){
             csv += x[row][key] + (keysCounter+1 < keysAmount ? ',' : '\r\n' )
             keysCounter++
         }


      keysCounter = 0
  }
console.log(csv);
var csvContent = "data:text/csv;charset=utf-8,";
csvContent+=csv;
var encodedUri = encodeURI(csvContent);
  window.open(encodedUri);

/*
  //Once we are done looping, download the .csv by creating a link
  let link = document.createElement('a')
  link.id = 'download-csv'
  link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv));
  link.setAttribute('download', 'yourfiletextgoeshere.csv');
  document.body.appendChild(link);
  document.querySelector('#download-csv').click()
  */;

}
terapieCSV() :void {
console.log(this.trp);
 let csvtrp="";
 let keysAmounttrp = Object.keys(this.trp[0]).length;
 let keysCountertrp = 0;
 for(let key in this.trp[0]){

                     // This is to not add a comma at the last cell
                     // The '\r\n' adds a new line
     csvtrp += key + (keysCountertrp+1 < keysAmounttrp ? ',' : '\r\n' )
     keysCountertrp++
     console.log(csvtrp);
 }

 // Loop the array of objects
 for(let row = 0; row < this.trp.length; row++){
keysCountertrp= 0
        for(let key in this.trp[row]){
            csvtrp += this.trp[row][key] + (keysCountertrp+1 < keysAmounttrp ? ',' : '\r\n' )
            keysCountertrp++
            console.log(csvtrp);
        }


     keysCountertrp = 0
 }
console.log(csvtrp);
var csvContenttrp = "data:text/csv;charset=utf-8,";
csvContenttrp+=csvtrp;
var encodedUritrp= encodeURI(csvContenttrp);
 window.open(encodedUritrp);

}


}
