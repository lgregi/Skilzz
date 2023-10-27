import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { CommunityComponent } from './community/community.component';
import { CommunityChallengeComponent } from './community-challenge/community-challenge.component';
import { MyChallengeComponent } from './my-challenge/my-challenge.component';
import { PlansComponent } from './plans/plans.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { authentication } from './Skillz_services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    MyProjectComponent,
    CommunityComponent,
    CommunityChallengeComponent,
    MyChallengeComponent,
    PlansComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [authentication],
  bootstrap: [AppComponent]
})
export class AppModule { }
