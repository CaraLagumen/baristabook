import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

import { AuthService } from "../auth.service";

@Component({
  selector: "app-reset",
  templateUrl: "./reset.component.html",
  styleUrls: ["./reset.component.scss"]
})
export class ResetComponent implements OnInit, OnDestroy {
  private authStatusSub: Subscription;

  token: string;

  isLoading = false;

  constructor(public authService: AuthService, private route: ActivatedRoute) {
    //FETCH TOKEN FROM ROUTE
    this.route.params.subscribe(param => (this.token = param["token"]));
  }

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => (this.isLoading = false));
  }

  onReset(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    this.authService.resetPassword(
      this.token,
      form.value.password,
      form.value.passwordConfirm
    );
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
