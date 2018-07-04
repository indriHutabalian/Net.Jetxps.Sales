import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { SharedModule } from './views/shared/shared.module';
import {
  AuthService,
  BranchService,
  ProspectClientService,
  EngagementRunsheetService,
  EngagementRunsheetItemService,
  EngagementProductTypeService,
  EngagementSellingTypeService,
  EngagementServiceTypeService,
  EngagementStatusService,
  SalesService,
  DataService,
} from './services';
import { AuthGuard } from './guards';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './app.interceptors';
import { EngagementRunsheetsModule } from './views/engagement-runsheets/engagement-runsheets.module';
import { ProspectClientsModule } from './views/prospect-clients/prospect-clients.module';
import { ReportModule } from './views/report/report.module';
import { TaskModule } from './views/task/task.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2ImgMaxModule,

    SharedModule,
    EngagementRunsheetsModule,
    ProspectClientsModule,
    ReportModule,
    TaskModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    ToastrService,
    AuthGuard,
    AuthService,
    DataService,
    BranchService,
    ProspectClientService,
    EngagementProductTypeService,
    EngagementRunsheetService,
    EngagementRunsheetItemService,
    EngagementSellingTypeService,
    EngagementServiceTypeService,
    EngagementStatusService,
    SalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
