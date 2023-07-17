import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SpaComponent } from './core/components/spa/spa.component';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NoopAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [SpaComponent]
})
export class AppModule { }
