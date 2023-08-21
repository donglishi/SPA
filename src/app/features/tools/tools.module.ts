import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsComponent } from './tools.component';
import { CoreModule } from '../../core/core.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToolsComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    FormsModule,
    CoreModule
  ]
})
export class ToolsModule { }
