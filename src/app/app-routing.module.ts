import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AdminHomeComponent, SageApiFormComponent, SageFieldMappingFormComponent, ThirdpartyEndpointFormComponent } from './admin';
import { LoginComponent, NewUserComponent } from './auth';
import { HomeAcbPaymentsComponent } from './acb_payments';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/new_user', component: NewUserComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'admin/settings/form/sage_api', component: SageApiFormComponent },
  { path: 'admin/settings/form/field_mapping', component: SageFieldMappingFormComponent },
  { path: 'admin/settings/form/thirdparty_ep', component: ThirdpartyEndpointFormComponent },
  { path: 'acb/payment', component: HomeAcbPaymentsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
