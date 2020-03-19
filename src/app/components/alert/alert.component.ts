import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectionStrategy
} from "@angular/core";
import { Subscription } from "rxjs";
import { Router, NavigationStart } from "@angular/router";

import { fadeTrigger } from "src/app/shared/route-animations";
import { Alert, AlertType } from "./alert.model";
import { AlertService } from "./alert.service";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeTrigger]
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = "default-alert";

  alertListenerSub: Subscription;
  routeSub: Subscription;
  alerts: Alert[] = [];

  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit() {
    //LISTEN FOR NEW ALERTS
    this.alertListenerSub = this.alertService
      .onAlert(this.id)
      .subscribe(alert => {
        //CLEAR ALERTS IF THERE IS NONE
        if (!alert.message) {
          //FILTER OUT ALERTS WITH keepAfterRouteChange FLAG
          this.alerts = this.alerts.filter(el => el.keepAfterRouteChange);

          //REMOVE keepAfterRouteChange FLAG ON REMAINDER
          this.alerts.forEach(el => delete el.keepAfterRouteChange);
          return;
        }

        //ADD ALERT TO ARR
        this.alerts.push(alert);

        //AUTO CLOSE IF AN OPTION
        if (alert.autoClose) {
          setTimeout(() => this.removeAlert(alert), 8000);
        }
      });

    //CLEAR ALERTS ON ROUTE CHANGE
    this.routeSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(el => el !== alert);
  }

  styleClass(alert: Alert) {
    if (!alert) return;

    const classes = ["alert"];

    const alertTypeClass = {
      [AlertType.Success]: "alert__success",
      [AlertType.Info]: "alert__info",
      [AlertType.Warning]: "alert__warning",
      [AlertType.Error]: "alert__danger"
    };

    classes.push(alertTypeClass[alert.type]);

    return classes.join(" ");
  }

  ngOnDestroy() {
    this.alertListenerSub.unsubscribe();
    this.routeSub.unsubscribe();
  }
}
