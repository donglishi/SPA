import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customers', loadChildren: () => import('../features/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('../features/orders/orders.module').then(m => m.OrdersModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'tools', loadChildren: () => import('../features/tools/tools.module').then(m => m.ToolsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
