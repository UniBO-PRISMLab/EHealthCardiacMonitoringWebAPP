import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ChartsModule } from 'ng2-charts';



import { AppComponent } from './app.component';
import { AutComponent } from './aut/aut.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MdfutlComponent } from './admin/mdfutl/mdfutl.component';
import { IsrutlComponent } from './admin/isrutl/isrutl.component';
import { InfComponent } from './inf/inf.component';
import { MedComponent } from './med/med.component';
import { GestpazComponent } from './gestpaz/gestpaz.component';
import { VisrilinfComponent } from './visrilinf/visrilinf.component';
import { VisrilmedComponent } from './visrilmed/visrilmed.component';
import { MdpazComponent } from './inf/mdpaz/mdpaz.component';
import { IsrpazComponent } from './inf/isrpaz/isrpaz.component';
import { PazstComponent } from './pazst/pazst.component';
import { PaztrpComponent } from './paztrp/paztrp.component';
import {EstrdatiComponent} from './estrdati/estrdati.component';


@NgModule({
  declarations: [
    AppComponent,
    AutComponent,
    TopBarComponent,
    ProfiloComponent,
    AdminComponent,
    MdfutlComponent,
    IsrutlComponent,
    InfComponent,
    MedComponent,
    GestpazComponent,
    VisrilinfComponent,
    VisrilmedComponent,
    MdpazComponent,
    IsrpazComponent,
    PazstComponent,
    PaztrpComponent,
    EstrdatiComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSliderModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    ChartsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
