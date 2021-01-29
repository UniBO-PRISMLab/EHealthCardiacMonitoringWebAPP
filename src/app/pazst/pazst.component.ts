import { Component, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Rilev } from '../inf/rilev';
import { MysqlService } from '../mysql.service';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { Observable, throwError} from 'rxjs';
import { ChartDataSets, ChartOptions,ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { FormGroup, FormControl } from '@angular/forms';
import { Valid } from './valid';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { User } from '../aut/user';



@Component({
  selector: 'app-pazst',
  templateUrl: './pazst.component.html',
  styleUrls: ['./pazst.component.css']
})
export class PazstComponent implements OnInit {

user: User;

  ril: Rilev={
    ID:0,
    data:'',
    ID_paz:0,
    peso:0,
    frequenza:0,
    pressione:'',
    passi:0,
    nota:'',
    allarme_aut:'',
    rpm:0,
    watt:0,
    flusso:0,
    picco:0,
    depressione:0,
    PI:0,
    allarme:'',
    notav:'',
    datav:'',
    PIDv: '',
  };

  val:Valid={
    dataR: '',
    ID_pazR: 0,
    nota:'',
    PID_u: '',
  };

  rilevsn: Rilev []=[];
  rilevcn: Rilev []=[];
  rilevgf: Rilev []=[];
  id:number;
  dataSource: MatTableDataSource<Rilev>;
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

  rilForm = new FormGroup({
     nota: new FormControl(''),
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

  @ViewChild(TopBarComponent) tpbr: TopBarComponent;


displayedColumns = ['ID', 'ID_paz', 'data', 'peso', 'frequenza', 'pressione', 'passi', 'rpm', 'watt', 'flusso', 'picco', 'depressione', 'PI', 'allarme', 'allarme_aut'];

  constructor(private route: ActivatedRoute,private mysqlservice: MysqlService) { }

  ngOnInit(): void {
    this.user=this.mysqlservice.user;

    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.mysqlservice.srcrilid(this.id).subscribe((msg:Rilev [])=>{this.rilevsn=msg;
    console.log(msg);if(msg.length==0){window.alert("Rilevazioni validate");}});

    this.mysqlservice.srcrilidcn(this.id).subscribe((msg:Rilev [])=>{this.rilevcn=msg;
    console.log(msg);if(msg.length==0){window.alert("Assenza Rilevazioni con note");}});

    this.mysqlservice.srcrilidgf(this.id).subscribe((msg:Rilev [])=>{this.rilevgf=msg;
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

    console.log(this.pressione);
    console.log(this.peso);
    console.log(this.frequenza);
    console.log(this.watt);


  }


public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

onRowClicked(row) {
    this.ril=row;
    this.val.dataR=row.data;
    this.val.ID_pazR=row.ID_paz;
    this.val.PID_u=this.user.PID;
}

onSubmit(): void {
if (this.val.ID_pazR!=0){
  this.val.nota=this.rilForm.get('nota').value;
  console.log(this.val);
  this.mysqlservice.insnt(this.val).subscribe((msg:any)=>{console.log(msg);if(msg==null){window.alert("Nota inserita");};this.mysqlservice.srcrilidcn(this.id).subscribe((msg:Rilev [] | any)=>{this.rilevcn=msg;
    console.log(msg);if(!msg){window.alert("Assenza Rilevazioni con note");}});});

  this.mysqlservice.srcrilid(this.id).subscribe((msg:Rilev [] | any)=>{this.rilevsn=msg;
    console.log(msg);if(!msg){window.alert("Rilevazioni validate");}});
/*
    this.mysqlservice.srcrilidcn(this.id).subscribe((msg:Rilev [] | any)=>{this.rilevcn=msg;
      console.log(msg);if(!msg){window.alert("Assenza Rilevazioni con note");}});*/

      this.val.ID_pazR=0;

        this.ril={
          ID:0,
          data:'',
          ID_paz:0,
          peso:0,
          frequenza:0,
          pressione:'',
          passi:0,
          nota:'',
          allarme_aut:'',
          rpm:0,
          watt:0,
          flusso:0,
          picco:0,
          depressione:0,
          PI:0,
          allarme:'',
          notav:'',
          datav:'',
          PIDv: '',
        };
  }
else window.alert("Selezionare Rilevazione");
}

}
