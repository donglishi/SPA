import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
The CoreModule takes on the role of the app root module. The common denominator between
files present here is that we only need to load them once, and that is at run-time, which makes
them singleton. Th modules contains root scoped servers, static components like the navbar and footer,
interceptors, guard, constants, enums, utils, and universal models.

To prevent re-importing the module elsewhere, we should add a module-import guard in it's constructor method.
(TODO)

*/


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
