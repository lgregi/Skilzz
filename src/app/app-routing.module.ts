import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommunityComponent } from './community/community.component';
import { CommunityChallengeComponent } from './community-challenge/community-challenge.component';
import { PlansComponent } from './plans/plans.component';



const routes: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'community-profile', component: CommunityComponent },
  { path: 'communityChallenge', component: CommunityChallengeComponent },
  { path: 'plans', component: PlansComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
