import { Injectable, ErrorHandler, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

import { AlertService } from "../components/alert/alert.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector, private alertService: AlertService) {}

  handleError(err: any) {
    const router = this.injector.get(Router);

    this.alertService.error(`Request URL: ${router.url}`, {
      autoClose: true,
      keepAfterRouteChange: true
    });

    console.log(`Request URL: ${router.url}`);

    if (err instanceof HttpErrorResponse) {
      this.alertService.error(`${err.status}: ${err.message}`, {
        autoClose: true,
        keepAfterRouteChange: true
      });

      console.error(`${err.status}: ${err.message}`);
    } else {
      this.alertService.error(`An error occurred: ${err.message}`, {
        autoClose: true,
        keepAfterRouteChange: true
      });

      console.error(`An error occurred: ${err.message}`);
    }
  }
}
