import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { environment } from "src/environments/environment";
import { AlertService } from "../components/alert/alert.service";
import { UserData } from "./user-data.model";
import { Drink } from '../shared/drink.model';
import { Starred } from '../shared/starred.model';

const ROOT_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService
  ) {}

  //STARRED FEATURE----------------------------------------------------------

  //FETCH ARR OF STARRED DRINKS OBJ
  getStarredDrinks(): Observable<any> {
    return this.http.get<any>(`${ROOT_URL}/starred/me`).pipe(
      //NEST LVL 1 { status: `success`, results: doc.length, doc }
      map(doc => {
        return {
          //NEST LVL 2 doc: { [STARRED ARR (EACH FOLLOWS STARRED SCHEMA)] }
          doc: doc.doc.map(doc => {
            //NEST LVL 3 drink: { DRINK DATA }
            return doc.drink;
          })
        };
      })
    );
  }

  //FETCH ARR OF STARRED OBJ (INCLUDES STARRED UNIQUE ID FOR DELETION)
  getStarred(): Observable<any> {
    return this.http.get<any>(`${ROOT_URL}/starred/me`).pipe(
      //NEST LVL 1 { status: `success`, results: doc.length, doc }
      map(doc => {
        return {
          //NEST LVL 2 doc: { [STARRED ARR (EACH FOLLOWS STARRED SCHEMA)] }
          doc: doc.doc.map(doc => {
            //NEST LVL 3 { COMPLETE STARRED DOC WITH UNIQUE ID}
            return doc;
          })
        };
      })
    );
  }

  saveStarred(drinkId: string, userId: string): Observable<any> {
    const starredData = { drinkId, userId };

    this.alertService.info("Your drink has been saved.", {
      autoClose: true,
      keepAfterRouteChange: true
    });

    return this.http.post<any>(`${ROOT_URL}/drinks/${drinkId}`, starredData);
  }

  deleteStarred(starreds: Starred[], drinkId: string): Observable<any> {
    let starredId;

    //MATCH DRINK ID WITH STARRED'S DRINK ID TO FIND STARRED UNIQUE ID
    starreds.forEach(el => {
      if ((el.drink as Drink).id === drinkId) {
        starredId = el.id;
      }
    });

    this.alertService.warn("Your star has been deleted.", {
      autoClose: true,
      keepAfterRouteChange: true
    });

    return this.http.delete(`${ROOT_URL}/starred/me/${starredId}`);
  }

  //PROFILE FEATURE----------------------------------------------------------

  //FETCH LOGGED IN USER DATA
  getUser(): Observable<any> {
    return this.http.get<any>(`${ROOT_URL}/users/me`).pipe(
      //NEST LVL 1 { status: `success`, doc }
      map(doc => {
        return {
          //NEST LVL 2 doc: { USER KEY VALUE PAIRS }
          doc: doc.doc
        };
      })
    );
  }

  //UPDATE USER INFO
  updateUser(name: string, email: string, location: string) {
    let userData: UserData | FormData;

    userData = { name, email, location };

    this.http.patch(`${ROOT_URL}/users/updateMe`, userData).subscribe(() => {
      this.alertService.success("Your info has been updated.", {
        autoClose: true,
        keepAfterRouteChange: true
      });
    });
  }

  contact(email: string, message: string) {
    this.http.post(`${ROOT_URL}/users/send`, { email, message }).subscribe(
      () => {
        this.alertService.success("Your email has been sent.", {
          autoClose: true,
          keepAfterRouteChange: true
        });
        this.router.navigate(["/nav/sent"]);
      },
      err => {
        this.alertService.error("There was a problem in sending your email.", {
          autoClose: true,
          keepAfterRouteChange: true
        });
        this.router.navigate(["/nav/fail"]);
      }
    );
  }
}
