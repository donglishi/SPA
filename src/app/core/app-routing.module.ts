import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customers', loadChildren: () => import('../features/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('../features/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'tools', loadChildren: () => import('../features/tools/tools.module').then(m => m.ToolsModule) },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
