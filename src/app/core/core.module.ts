import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './components/spa/top-header/top-header.component';
import { FooterComponent } from './components/spa/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SpaComponent } from './components/spa/spa.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { UnicodePipe } from './pipes/unicode.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/*
The CoreModule takes on the role of the app root module. The common denominator between
files present here is that we only need to load them once, and that is at run-time, which makes
them singleton. Th modules contains root scoped servers, static components like the navbar and footer,
interceptors, guard, constants, enums, utils, and universal models.

To prevent re-importing the module elsewhere, we should add a module-import guard in it's constructor method.
(TODO)

*/


@NgModule({
  declarations: [
    TopHeaderComponent,
    FooterComponent,
    SpaComponent,
    UnicodePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    UnicodePipe,
    TopHeaderComponent,
    FooterComponent,
    SpaComponent
  ]
})
export class CoreModule { }
