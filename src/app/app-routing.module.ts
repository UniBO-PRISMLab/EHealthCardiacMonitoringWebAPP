import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EstrdatiComponent } from './estrdati/estrdati.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { AutComponent } from './aut/aut.component';
import { AdminComponent } from './admin/admin.component';
import { InfComponent } from './inf/inf.component';
import { MedComponent } from './med/med.component';
import { GestpazComponent } from './gestpaz/gestpaz.component';
import { VisrilinfComponent } from './visrilinf/visrilinf.component';
import { VisrilmedComponent } from './visrilmed/visrilmed.component';
import { PazstComponent } from './pazst/pazst.component';
import { PaztrpComponent } from './paztrp/paztrp.component';
import{ProfilGuard} from './guard/profil.guard'
import{InfGuard} from './guard/inf.guard'
import{MedGuard} from './guard/med.guard'
import{AdminGuard} from './guard/admin.guard'

const routes: Routes = [
  { path: 'login', component: AutComponent },
  { path: 'admin',
   component: AdminComponent,
   canActivate: [AdminGuard],
  },
  { path: 'inf',
  component: InfComponent,
  canActivate: [InfGuard],
  canActivateChild: [InfGuard],
  children: [
           { path: 'gestpaz', component: GestpazComponent },
           { path: 'visrilinf', component: VisrilinfComponent },
           { path: 'pazst/:id', component: PazstComponent },
           { path: 'estrdati', component: EstrdatiComponent },
         ],
 },
  { path: 'med',
  component: MedComponent,
  canActivate: [MedGuard],
  canActivateChild: [MedGuard],
  children: [
           { path: 'visrilmed', component: VisrilmedComponent },
           { path: 'visrilinf', component: VisrilinfComponent },
           { path: 'estrdati', component: EstrdatiComponent },
          ],
 },
  { path: 'profilo',
  canActivate: [ProfilGuard],
  component: ProfiloComponent },

  { path: '**', component: AutComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
