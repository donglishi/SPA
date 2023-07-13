import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ObjectTableComponent } from './components/object-table/object-table.component';

/*
When working on large applications, Angular suggest us to consider lazy loading of our modules.
This decreases the bundle size of our application and therefore the intial build-time, and this
is where the SharedModule truly shines.

The SharedModule allows us to organize and streamline our code. It should not have any dependency to the rest
of the application, and should therefore not rely on any other modules. It should contain all the reusable modules,
lazy loaded feature modules required to operate. You should add commonly used directives, pipes and components here.

ng g component shared/components/objectTable --module=shared/shared.module.ts

*/

@NgModule({
  declarations: [
    ObjectTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    ObjectTableComponent
  ]
})
export class SharedModule { }
