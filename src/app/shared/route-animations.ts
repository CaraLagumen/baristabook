import {
  trigger,
  transition,
  style,
  query,
  animate,
  animateChild
} from "@angular/animations";

export const fade = trigger("fadeAnimation", [
  transition("* <=> *", [
    style({ position: "relative" }),
    query(
      ":enter",
      [
        style({
          opacity: "0"
        })
      ],
      { optional: true }
    ),
    query(":enter", [animate("500ms ease-in-out", style({ opacity: "1" }))], {
      optional: true
    }),
    query(":enter", animateChild(), { optional: true })
  ])
]);
