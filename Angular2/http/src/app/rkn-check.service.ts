import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class RKNService {
   constructor(private http: Http) {}
   getData() {
       return this.http.get('https://api.antizapret.info/get.php?item=4azziino777.com&type=json')
           .map(
               (response: Response) => {
                   const data = response.json();
                   return data;
               }
           );
   }
}
