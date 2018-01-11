import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Injectable()
export class FormPoster {

    private extractData(res: Response): any {
        // tslint:disable-next-line:prefer-const
        let body = res.json();
        return body.fields || { };
    }

    private extractLanguages (res: Response): any {
        // tslint:disable-next-line:prefer-const
        let body = res.json();
        return body.data || { };
    }
    private handleError(error: any): any {
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
    }

    constructor(private http: Http) {

    }

    getLanguages(): Observable<any> {
        return this.http.get('http://localhost:3100/get-languages')
            .delay(5000)
            .map(this.extractLanguages)
            .catch(this.handleError);
    }
    postEmployeeForm(employee: Employee): Observable<any> {
        console.log('Posting Employee: ', employee);
        // tslint:disable-next-line:prefer-const
        let body = JSON.stringify(employee);
        // tslint:disable-next-line:prefer-const
        let headers = new Headers({ 'Content-Type': 'application/json' });
        // tslint:disable-next-line:prefer-const
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3100/postemployee', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }


}
