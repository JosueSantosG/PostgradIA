import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { LoginComponent } from './components/login/login.component';
import { InterfazUserComponent } from './components/interfaz-user/interfaz-user.component';
import { OfertaComponent } from "./components/oferta/oferta.component";
const routes: Routes = [
  { path: '', redirectTo: 'chatbot', pathMatch: 'full' },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'login', component: LoginComponent },
  { path: 'review-documents/:maestria', component: InterfazUserComponent },
  { path: 'inscripcion-postgrado', component: OfertaComponent },
  { path: '**', redirectTo: 'chatbot', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
