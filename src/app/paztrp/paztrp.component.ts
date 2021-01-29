import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Paz } from '../inf/paz';
import { User } from '../aut/user';
import { Terap } from '../med/terap';
import { Rilev } from '../inf/rilev';
import { MysqlService } from '../mysql.service';
import { ChartDataSets, ChartOptions,ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-paztrp',
  templateUrl: './paztrp.component.html',
  styleUrls: ['./paztrp.component.css']
})
export class PaztrpComponent implements OnInit {

@Input() paz: Paz;

user: User;

rilevcn: Rilev []=[];
rilevgf: Rilev []=[];
trp: Terap []=[];
terap:Terap={
  data:'',
  ID_paz: 0,
  nota: '',
  PID_medico: '',
};

pressione:number[]=[];
peso:number[]=[];
frequenza:number[]=[];
passi:number[]=[];
rpm:number[]=[];
watt:number[]=[];
flusso:number[]=[];
picco:number[]=[];
depressione:number[]=[];
PI:number[]=[];


trpForm = new FormGroup({
   trp: new FormControl(''),
 });

public pressChartData: ChartDataSets[] = [
   { data: this.pressione, label: 'Pressione' }
 ];

public pesoChartData: ChartDataSets[] = [
   { data: this.peso, label: 'Peso in kg' }
 ];

 public freqChartData: ChartDataSets[] = [
    { data: this.frequenza, label: 'Frequenza in bpm' }
  ];

  public passiChartData: ChartDataSets[] = [
     { data: this.passi, label: 'Passi' }
   ];

  public rpmChartData: ChartDataSets[] = [
  { data: this.rpm, label: 'RPM' }
  ];

public wChartData: ChartDataSets[] = [
  { data: this.watt, label: 'Watt' }
     ];

  public flChartData: ChartDataSets[] = [
    { data: this.flusso, label: 'Flusso in litri' }
    ];

  public piccoChartData: ChartDataSets[] = [
    { data: this.picco, label: 'Picco' }
      ];

  public PIChartData: ChartDataSets[] = [
      { data: this.PI, label: 'PI' }
      ];

 public lineChartLabels: Label[] = [];

 public lineChartOptions: (ChartOptions) = {
 responsive: true,
 scales: {
   // We use this empty structure as a placeholder for dynamic theming.
   xAxes: [{}],
   yAxes: [{}]
 }
};

public lineChartColors: Color[] = [
   { // dark grey
     backgroundColor: 'rgba(77,83,96,0.2)',
     borderColor: 'rgba(77,83,96,1)',
     pointBackgroundColor: 'rgba(77,83,96,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(77,83,96,1)'
   }
 ];
 public lineChartLegend = true;
 public lineChartType = 'line';
 public lineChartPlugins = [pluginAnnotations];



 public barChartOptions: ChartOptions = {
responsive: true,
// We use these empty structures as placeholders for dynamic theming.
scales: { xAxes: [{}], yAxes: [{}] },
plugins: {
  datalabels: {
    anchor: 'end',
    align: 'end',
  }
}
};
public barChartLabels: Label[] = [];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [pluginDataLabels];


@ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;



  constructor(private mysqlservice: MysqlService) { }

  ngOnInit(): void {

      console.log(this.paz);

      this.user=this.mysqlservice.user;

      this.mysqlservice.srcrilidcn(this.paz.ID).subscribe((msg:Rilev [])=>{this.rilevcn=msg;
      console.log(msg);if(msg.length==0){window.alert("Assenza Rilevazioni con note");}});

      this.mysqlservice.srctrp(this.paz.ID).subscribe((msg:Terap [])=>{this.trp=msg;
      console.log(msg);if(msg.length==0){window.alert("Assenza Terapie");}});

      this.mysqlservice.srcrilidgf(this.paz.ID).subscribe((msg:Rilev [])=>{this.rilevgf=msg;
      console.log(this.rilevgf);if(msg.length==0) window.alert("Assenza Rilevazioni ultimi 30 giorni");
      if (this.rilevgf.length>0) {
        for(var i = 0; i < this.rilevgf.length; i++)
        {
          this.lineChartLabels.push(this.rilevgf[i].data);
          this.barChartLabels.push(this.rilevgf[i].data);

          if (this.rilevgf[i].pressione==="alta")
          {
            this.pressione.push(1);
            //this.barChartLabels.push(this.rilevgf[i].data);
          }
            else
            {
              this.pressione.push(0);
              this.barChartLabels.push(this.rilevgf[i].data);
            }
          if (this.rilevgf[i].peso!=null)
            this.peso.push(+this.rilevgf[i].peso);
            else this.peso.push(0);
          if (this.rilevgf[i].frequenza!=null)
            this.frequenza.push(+this.rilevgf[i].frequenza);
            else this.frequenza.push(0);
          if (this.rilevgf[i].passi!=null)
            this.passi.push(+this.rilevgf[i].passi);
            else this.passi.push(0);
          if (this.rilevgf[i].rpm!=null)
            this.rpm.push(+this.rilevgf[i].rpm);
            else this.rpm.push(0);
          if (this.rilevgf[i].watt!=null)
            this.watt.push(+this.rilevgf[i].watt);
            else this.watt.push(0);
          if (this.rilevgf[i].flusso!=null)
            this.flusso.push(+this.rilevgf[i].flusso);
            else this.flusso.push(0);
          if (this.rilevgf[i].picco!=null)
            this.picco.push(+this.rilevgf[i].picco);
            else this.picco.push(0);
          if (this.rilevgf[i].depressione!=null)
            this.depressione.push(+this.rilevgf[i].depressione);
            else this.depressione.push(0);
          if (this.rilevgf[i].PI!=null)
            this.PI.push(+this.rilevgf[i].PI);
            else this.PI.push(0);
        }
      }
  console.log(this.rilevgf.length);
      });
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  onSubmit(): void {

    this.terap.nota=this.trpForm.get('trp').value;
    this.terap.data='';
    this.terap.ID_paz=this.paz.ID;
    this.terap.PID_medico=this.user.PID;

    console.log(this.trp);

    this.mysqlservice.instrp(this.terap).subscribe((msg:any)=>{console.log(msg);if(msg==null){window.alert("Terapia inserita");};this.mysqlservice.srctrp(this.paz.ID).subscribe((msg:Terap [])=>{this.trp=msg; console.log(msg);if(msg.length==0){window.alert("Assenza Terapie");}});});

  //  this.mysqlservice.srctrp(this.paz.ID).subscribe((msg:Terap [])=>{this.trp=msg; console.log(msg);if(msg.length==0){window.alert("Assenza Terapie");}});
  }

}
