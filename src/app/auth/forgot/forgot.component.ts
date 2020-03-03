import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { AuthService } from "../auth.service";
import { fadeTrigger } from "src/app/shared/route-animations";

@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.scss"],
  animations: [fadeTrigger]
})
export class ForgotComponent implements OnInit, OnDestroy {
  private authStatusSub: Subscription;

  state: string;

  isLoading = false;

  constructor(public authService: AuthService, private route: ActivatedRoute) {
    //FETCH STATE FROM ROUTE LINK TO SET RESET GREETING
    this.route.params.subscribe(param => (this.state = param["state"]));
  }

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => (this.isLoading = false));
  }

  onForgot(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    this.authService.forgotPassword(form.value.email);
  }

  onReset(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    this.authService.resetPassword(form.value.password, form.value.passwordConfirm);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
