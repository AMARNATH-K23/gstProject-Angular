import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GstlistComponent } from './gstlist/gstlist.component';
import { JwtInterceptor } from'./tokeninterseptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GstlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS , useClass: JwtInterceptor , multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
