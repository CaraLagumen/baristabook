import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  state: string;

  isLoading = false;

  constructor(private route: ActivatedRoute) {
    //FETCH STATE FROM ROUTE LINK TO SET NAV CLASSES FOR BROWSING DIFFERENT PAGES
    this.route.params.subscribe(param => (this.state = param["link"]));
  }

  ngOnInit() {}

  onContact(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;
  }
}
