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
        style({ opacity: "0" }),
        animate("200ms ease-in-out", style({ opacity: "1" }))
      ],
      {
        optional: true
      }
    ),
    query(":enter", animateChild(), { optional: true })
  ])
]);

export const fadeTrigger = trigger("fadeTrigger", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("200ms", style({ opacity: 1 }))
  ])
]);
