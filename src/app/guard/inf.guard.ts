import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

import { MysqlService } from '../mysql.service';

@Injectable({
  providedIn: 'root'
})
export class InfGuard implements CanActivate, CanActivateChild {

  constructor(private mysqlservice: MysqlService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean | UrlTree {

      if (this.mysqlservice.user!=null&&(this.mysqlservice.user.Categoria=="Infermiere" ||
          this.mysqlservice.user.Categoria=="Medico"))
      { return true;}

      return this.router.parseUrl('/login');
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    return this.canActivate(next, state);
  }

}
