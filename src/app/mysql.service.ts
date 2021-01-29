import { Injectable } from '@angular/core';
import { User } from './aut/user';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders,HttpParams, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Np } from './profilo/np';
import { Paz } from './inf/paz';
import { Rilev } from './inf/rilev';
import { Valid } from './pazst/valid';
import { Terap } from './med/terap';



@Injectable({
  providedIn: 'root'
})
export class MysqlService {

public user : User=null;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  options: {
      headers?: HttpHeaders | {[header: string]: string | string[]},
      observe?: 'body' | 'events' | 'response',
      params?: HttpParams|{[param: string]: string | string[]},
      reportProgress?: boolean,
      responseType?: 'arraybuffer'|'blob'|'json'|'text',
      withCredentials?: boolean,
    };

  private handleError(error: HttpErrorResponse) {

  let errorMessage='';

  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage=`Errore client ${error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    errorMessage=
    `Errore server: ${error.status}, ` +
      `descrizione: ${error.message}`;
  }
  // Return an observable with a user-facing error message.
  window.alert(errorMessage);
  return throwError(errorMessage);
}


  constructor(private http: HttpClient) { }

  getuser(g: FormGroup) : Observable<User> {
    console.warn(g.value);
    const log=this.http.post("/api/log.php", { data:'', PID: g.get('pid').value, action:'login'}, this.httpOptions);
    log.subscribe();
    return this.http.post<User>("/api/login.php", g.value, this.httpOptions).pipe(catchError(this.handleError));
    }

    getAllmed() : Observable<User []> {
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, action:'getAllUser'}, this.httpOptions);
      log.subscribe();
      return this.http.get<User[]>("/api/getallmed.php", {observe: 'body', responseType: 'json'}).pipe(catchError(this.handleError));
    }

    allpaz() : Observable<Paz []> {
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, action:'allpaz'}, this.httpOptions);
      log.subscribe();
      return this.http.get<Paz[]>("/api/allpaz.php", {observe: 'body', responseType: 'json'}).pipe(catchError(this.handleError));
    }



    uppwd (g:Np) : Observable<any> {
      console.warn(g);
      const log=this.http.post("/api/log.php", { data:'', PID: g.PID, action:'updatepwd'}, this.httpOptions);
      log.subscribe();
      return this.http.post<any>("/api/uppwd.php", g, this.httpOptions).pipe(catchError(this.handleError));
      }

    srcpid(g: FormGroup) : Observable<User> {
      console.warn(g.value);
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, ID_u:g.value, action:'srcutil'}, this.httpOptions);
      log.subscribe();
      return this.http.post<User>("/api/srcpid.php", g.value, this.httpOptions).pipe(catchError(this.handleError));
    }

    allril(g: FormGroup) : Observable<Rilev> {
      console.warn(g.value);
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, ID_u:g.value, action:'allril'}, this.httpOptions);
      log.subscribe();
      return this.http.post<Rilev>("/api/allril.php", g.value, this.httpOptions).pipe(catchError(this.handleError));
    }

    alltrp(g:number) : Observable<Terap> {
      console.warn(g);
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, ID_u:g, action:'alltrp'}, this.httpOptions);
      log.subscribe();
      return this.http.post<Terap>("/api/alltrp.php", g, this.httpOptions).pipe(catchError(this.handleError));
    }

    isrutl (g: User) : Observable<any> {
      console.warn(g);
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, PID_ins:g.PID, action:'insutil'}, this.httpOptions);
      log.subscribe();
      return this.http.post<any>("/api/isrutl.php", g, this.httpOptions).pipe(catchError(this.handleError));
    }

      mdrutl (g: User) : Observable<any> {
        console.warn(g);
        const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, PID_mod:g.PID, action:'modutil'}, this.httpOptions);
        log.subscribe();
        return this.http.post<any>("/api/mdrutl.php", g, this.httpOptions).pipe(catchError(this.handleError));
    }

    srcpaz(g: FormGroup) : Observable<Paz> {
    console.warn(g.value);
    const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, ID:g.get('id').value, action:'srcpaz'}, this.httpOptions);
    log.subscribe();
    return this.http.post<Paz>("/api/srcpaz.php", g.value, this.httpOptions).pipe(catchError(this.handleError));
    }

    isrpaz (g: Paz) : Observable<any> {
      console.warn(g);
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, ID:g.ID, action:'inspaz'}, this.httpOptions);
      log.subscribe();
      return this.http.post<any>("/api/isrpaz.php", g, this.httpOptions).pipe(catchError(this.handleError));
    }

    mdpaz (g: Paz) : Observable<any> {
      console.warn(g);
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, ID:g.ID, action:'modpaz'}, this.httpOptions);
      log.subscribe();
      return this.http.post<any>("/api/mdpaz.php", g, this.httpOptions).pipe(catchError(this.handleError));
    }

    srcril() : Observable<Rilev []> {
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, action:'srcril'}, this.httpOptions);
      log.subscribe();
      return this.http.get<Rilev []>("/api/srcril.php", {observe: 'body', responseType: 'json'}).pipe(catchError(this.handleError));
    }

    srcrilid (g: number) : Observable<Rilev []> {
      console.warn(g);
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, ID:g, action:'srcrilid'}, this.httpOptions);
      log.subscribe();
      return this.http.post<Rilev []>("/api/srcrilid.php", g, this.httpOptions).pipe(catchError(this.handleError));
    }

    srcrilidcn (g: number) : Observable<Rilev []> {
      console.warn(g);
      return this.http.post<Rilev[]>("/api/srcrilidcn.php", g, this.httpOptions).pipe(catchError(this.handleError));
    }

    srcrilidgf (g: number) : Observable<Rilev []> {
      console.warn(g);
      return this.http.post<Rilev []>("/api/srcrilidgf.php", g, this.httpOptions).pipe(catchError(this.handleError));
    }

    insnt (g: Valid) : Observable<any> {
      console.warn(g);
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, ID:g.ID_pazR, dataR:g.dataR, action:'insnt'}, this.httpOptions);
      log.subscribe();
      return this.http.post<any>("/api/insnt.php", g, this.httpOptions).pipe(catchError(this.handleError));
    }

    srctrp (g: number) : Observable<Terap []> {
      console.warn(g);
      return this.http.post<Terap []>("/api/srctrp.php", g, this.httpOptions).pipe(catchError(this.handleError));
    }

    instrp (g: Terap) : Observable<any> {
      console.warn(g);
      const log=this.http.post("/api/log.php", { data:'', PID:this.user.PID, ID:g.ID_paz, action:'instrp'}, this.httpOptions);
      log.subscribe();
      return this.http.post<any>("/api/instrp.php", g, this.httpOptions).pipe(catchError(this.handleError));
    }

/*
    insril() : void {
      console.log("PIPPO");
       const log=this.http.post("/api/insril.php",{id:1,peso:50,frequenza:60,pressione:'',passi:5000,nota:'mal di gola',allarme_aut:'watt alti',rpm:90,watt:5.0,flusso:60,picco:5.9,depressione:8.0,pi:9.5,alrm:'Watt alti',nome:'americo',cognome:'ianaro'}, this.httpOptions).pipe(catchError(this.handleError));
      log.subscribe((user: any)=>{console.log(user);});
    }
*/
  }
