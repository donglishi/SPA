import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
When working on large applications, Angular suggest us to consider lazy loading of our modules.
This decreases the bundle size of our application and therefore the intial build-time, and this
is where the SharedModule truly shines.

The SharedModule allows us to organize and streamline our code. It should not have any dependency to the rest
of the application, and should therefore not rely on any other modules. It should contain all the reusable modules,
lazy loaded feature modules required to operate. You should add commonly used directives, pipes and components here.
*/

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
