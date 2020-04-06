import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'add-product-signup',
    loadChildren: () => import('./add-product-signup/add-product-signup.module').then(m => m.AddProductSignupPageModule)
  },
  {
    path: 'cash-popover',
    loadChildren: () => import('./cash-popover/cash-popover.module').then( m => m.CashPopoverPageModule)
  },
  {
    path: 'add-item-popover',
    loadChildren: () => import('./add-item-popover/add-item-popover.module').then( m => m.AddItemPopoverPageModule)
  },
  {
    path: 'select-printer-popover',
    loadChildren: () => import('./select-printer-popover/select-printer-popover.module').then( m => m.SelectPrinterPopoverPageModule)
  },
  {
    path: 'grid-tabs-popover',
    loadChildren: () => import('./grid-tabs-popover/grid-tabs-popover.module').then( m => m.GridTabsPopoverPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
