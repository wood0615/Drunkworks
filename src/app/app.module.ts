import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA, ViewContainerRef  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FullComponent } from './layouts/full/full.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import { VerticalAppHeaderComponent } from './layouts/full/vertical-header/vertical-header.component';
import { VerticalAppSidebarComponent } from './layouts/full/vertical-sidebar/vertical-sidebar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';


import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { brewhausService } from './services/brewhaus.service';

import { DatePipe } from '@angular/common';
import { ModalModule } from './views/modal';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { AvatarModule } from 'ngx-avatar';

import { ContextMenuModule } from 'ngx-contextmenu';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatCardModule } from '@angular/material/card';
import { CustomInterceptor } from './interceptors/intercept';
import { brewhausComponent } from './views/brewhaus/brewhaus.component';
import { brewhausDetailsComponent } from './views/brewhaus_details/brewhausdetails.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HelpComponent } from './views/help/help.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    VerticalAppHeaderComponent,
    VerticalAppSidebarComponent,
    FullComponent,
    brewhausComponent,
    brewhausDetailsComponent,
    HelpComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    Ng2SearchPipeModule,
    ModalModule,
    AvatarModule,
    MatCardModule,
           NgSelectModule,
           ContextMenuModule.forRoot(),
       TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    MatMenuModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor ,
      multi: true
    },
 DatePipe,
 brewhausService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
