import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { LogicEditorComponent } from './logic-editor/logic-editor.component';
import { CoreModule } from '../../core/core.module';
import { FormsModule } from '@angular/forms';
import { TypeCollectorComponent } from './type-collector/type-collector.component';


@NgModule({
  declarations: [
    LogicEditorComponent,
    TypeCollectorComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    FormsModule,
    CoreModule
  ]
})
export class ToolsModule { }
