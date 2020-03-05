import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GlobalErrorHandler } from './global-error-handler.service';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }]
})
export class SharedModule {}
