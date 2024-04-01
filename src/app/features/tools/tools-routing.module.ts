import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogicEditorComponent } from './logic-editor/logic-editor.component';
import { TypeCollectorComponent } from './type-collector/type-collector.component';

const routes: Routes = [
  { path: 'typecollector', component: TypeCollectorComponent },
  { path: '', component: LogicEditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
