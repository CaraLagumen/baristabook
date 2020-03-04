import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

import { fadeTrigger } from "src/app/shared/route-animations";
import { UserService } from "src/app/user/user.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  animations: [fadeTrigger]
})
export class NavComponent implements OnInit {
  state: string;

  isLoading = false;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    //FETCH STATE FROM ROUTE LINK TO SET NAV CLASSES FOR BROWSING DIFFERENT PAGES
    this.route.params.subscribe(param => (this.state = param["link"]));
  }

  ngOnInit() {}

  onContact(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    this.userService.contact(form.value.email, form.value.message);
  }
}
