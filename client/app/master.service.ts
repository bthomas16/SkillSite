import { Injectable } from '@angular/core'
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Master } from "./models/master.model";

@Injectable()
  export class MasterService {
    private masters: Master[] = [];

    constructor(private http: Http) {}


    getMasters() {
      return this.http.get('https://learnt.herokuapp.com/master/retrieve-all')
      .map((response: Response) => {
        const masters = response.json().obj;
        let transformedMasters: Master[] = [];
              for (let master of masters) {
                  transformedMasters.push(new Master(
                      master.firstname,
                      master.lastname,
                      master.email,
                      master.yearsExp,
                      master.skill1,
                      master.skill2,
                      master.skill3)
                  );
              }
              this.masters = transformedMasters;
              return transformedMasters;
      })
      .catch((error: Response) => Observable.throw(error.json()));
    }

}
