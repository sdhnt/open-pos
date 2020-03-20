import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'income-transaction',
        pathMatch: 'full'
      },
      {
        path: 'transaction-home',
        children: [
          {
            path: '',
            loadChildren: () => import('../transaction-home/transaction-home.module').then(m => m.TransactionHomePageModule)
          }
        ]
      },
      {
        path: 'add-product-signup',
        children: [
          {
            path: '',
            loadChildren: () => import('../add-product-signup/add-product-signup.module').then(m => m.AddProductSignupPageModule)
          }
        ]
      },
      {
        path: 'add-product-category',
        children: [
          {
            path: '',
            loadChildren: () => import('../add-product-category/add-product-category.module').then(m => m.AddProductCategoryPageModule)
          }
        ]
      },
      {
        path: 'addproduct',
        children: [
          {
            path: '',
            loadChildren: () => import('../addproduct/addproduct.module').then(m => m.AddproductPageModule)
          }
        ]
      },
      {
        path: 'singleproduct',
        children: [
          {
            path: '',
            loadChildren: () => import('../singleproduct/singleproduct.module').then(m => m.SingleproductPageModule)
          }
        ]
      },
      {
        path: 'user-data',
        children: [
          {
            path: '',
            loadChildren: () => import('../user-data/user-data.module').then(m => m.UserDataPageModule)
          }
        ]
      },
      {
        path: 'individual-contact',
        children: [
          {
            path: '',
            loadChildren: () => import('../individual-contact/individual-contact.module').then(m => m.IndividualContactPageModule)
          }
        ]
      },
      {
        path: 'all-transaction',
        children: [
          {
            path: '',
            loadChildren: () => import('../all-transaction/all-transaction.module').then(m => m.AllTransactionPageModule)
          }
        ]
      },
      {
        path: 'contact-us',
        children: [
          {
            path: '',
            loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsPageModule)
          }
        ]
      },
      {
        path: 'contacts',
        children: [
          {
            path: '',
            loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsPageModule)
          }
        ]
      },
      {
        path: 'expense-general',
        children: [
          {
            path: '',
            loadChildren: () => import('../expense-general/expense-general.module').then(m => m.ExpenseGeneralPageModule)
          }
        ]
      },
      {
        path: 'help',
        children: [
          {
            path: '',
            loadChildren: () => import('../help/help.module').then(m => m.HelpPageModule)
          }
        ]
      },
      {
        path: 'income-transaction',
        children: [
          {
            path: '',
            loadChildren: () => import('../income-transaction/income-transaction.module').then(m => m.IncomeTransactionPageModule)
          }
        ]
      },
      {
        path: 'loan-home',
        children: [
          {
            path: '',
            loadChildren: () => import('../loan-home/loan-home.module').then(m => m.LoanHomePageModule)
          }
        ]
      },
      {
        path: 'summary-graphs',
        children: [
          {
            path: '',
            loadChildren: () => import('../summary-graphs/summary-graphs.module').then(m => m.SummaryGraphsPageModule)
          }
        ]
      },
      {
        path: 'transaction-product',
        children: [
          {
            path: '',
            loadChildren: () => import('../transaction-product/transaction-product.module').then(m => m.TransactionProductPageModule)
          }
        ]
      },
      {
        path: 'update-stock',
        children: [
          {
            path: '',
            loadChildren: () => import('../update-stock/update-stock.module').then(m => m.UpdateStockPageModule)
          }
        ]
      },
      {
        path: 'user-profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../user-profile/user-profile.module').then(m => m.UserProfilePageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
