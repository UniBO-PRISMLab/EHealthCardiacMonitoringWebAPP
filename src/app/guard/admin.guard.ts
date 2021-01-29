import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MysqlService } from '../mysql.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

constructor(private mysqlservice: MysqlService, private router: Router) { }

canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot):  boolean | UrlTree {

    if (this.mysqlservice.user!=null && this.mysqlservice.user.Categoria=="admin")
    { return true;}

    return this.router.parseUrl('/login');
}

}
