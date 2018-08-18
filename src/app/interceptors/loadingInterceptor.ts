import { Injectable, Injector, ViewContainerRef } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
 
@Injectable()
export class loadingInterceptor implements HttpInterceptor {
    /*constructor(public toastr: ToastsManager,
        vcr: ViewContainerRef) {this.toastr.setRootViewContainerRef(vcr); 
        }*/
    constructor(private router: Router) { 
    }
 
    //intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let loadingContainer: HTMLElement = document.getElementsByClassName('loading').item(0) as HTMLElement;
       // console.log(loadingContainer);
        loadingContainer.style.display = 'block';
        //send the request
       /* next.handle(req).subscribe((observer: any) => {
            if (observer.status == 200) {
                loadingContainer.style.display = 'none';
            }
        })
        return next.handle(req);*/
        const token: string = localStorage.getItem('currentUser');
        //console.log(token);
         if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req)
                .do((ev: HttpEvent<any>) => {
                    if (ev instanceof HttpResponse) {
                        //console.log('processing response', ev);
                        loadingContainer.style.display = 'none';

                    }
                })
                .catch(response => {
                    if (response instanceof HttpErrorResponse) {
                      console.log('Processing http error', response);
                      loadingContainer.style.display = 'none';
                      if(response.status == 401){
                        //this.toastr.error('Security token expired', 'Oops!');
                        
                        localStorage.removeItem('currentUser');
                        localStorage.removeItem('mtdUser');
                        localStorage.removeItem('mtdId');
                        alert('Security token expired');
                        this.router.navigate(['/login']);
                      }else{
                        alert('Something went wrong.'); 
                      }
                    }
            
                    return Observable.throw(response);
                  });
    }
}