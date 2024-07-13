import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ChatService } from './services/chatservice.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SessionService } from './services/session.service';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FormsModule } from '@angular/forms'; 
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { LoginComponent } from './components/login/login.component';
import { InterfazUserComponent } from './components/interfaz-user/interfaz-user.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OfertaComponent } from './components/oferta/oferta.component';
import { AddtokenInterceptor } from './utils/addtoken.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ChatbotComponent,
    SanitizeHtmlPipe,
    LoginComponent,
    InterfazUserComponent,
    OfertaComponent,
    SpinnerComponent,
    OfertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [ChatService,SessionService,{provide:HTTP_INTERCEPTORS, useClass: AddtokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
