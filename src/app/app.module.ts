import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SageApiFormComponent } from './admin/settings/sage-api-form/sage-api-form.component';
import { SageFieldMappingFormComponent } from './admin/settings/sage-field-mapping-form/sage-field-mapping-form.component';
import { ThirdpartyEndpointFormComponent } from './admin/settings/thirdparty-endpoint-form/thirdparty-endpoint-form.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { LoginComponent } from './auth/login/login.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { HomeAcbPaymentsComponent } from './acb_payments/home-acb-payments/home-acb-payments.component';
import { FakeBackendInterceptor } from './_helpers';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SageApiFormComponent,
    SageFieldMappingFormComponent,
    ThirdpartyEndpointFormComponent,
    AdminHomeComponent,
    LoginComponent,
    NewUserComponent,
    HomeAcbPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FakeBackendInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
