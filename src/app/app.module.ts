import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import {CitySearchComponent} from "./city-search/city-search.component";
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NewsComponent } from './news/news.component';
import { FormsModule } from '@angular/forms';
// import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //Добавление AppRoutingModule для роутов
    HttpClientModule, // Добавление HttpClientModule в список импортируемых модулей
    ReactiveFormsModule,
    FormsModule,
    CitySearchComponent,
    // GraphQLModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
