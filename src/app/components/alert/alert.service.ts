import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { filter } from "rxjs/operators";

import { Alert, AlertType } from "./alert.model";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  private subject = new Subject<Alert>();
  private defaultId = "default-alert";

  //ENABLE SUBSCRIPTION TO ALERTS OBSERVABLE
  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter(el => el && el.id === id));
  }

  //MAIN METHOD
  alert(alert: Alert) {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  clear(id = this.defaultId) {
    this.subject.next(new Alert({ id }));
  }

  //ALTER MAIN METHOD
  success(message: string, options?: any) {
    this.alert(new Alert({ type: AlertType.Success, message, ...options }));
  }

  info(message: string, options?: any) {
    this.alert(new Alert({ type: AlertType.Info, message, ...options }));
  }

  warn(message: string, options?: any) {
    this.alert(new Alert({ type: AlertType.Warning, message, ...options }));
  }

  error(message: string, options?: any) {
    this.alert(new Alert({ type: AlertType.Error, message, ...options }));
  }
}
