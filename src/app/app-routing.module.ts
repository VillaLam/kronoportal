import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DebtCreationComponent } from './components/debt-creation/debt-creation.component';
import { DebtRegistrationComponent } from './components/debt-registration/debt-registration.component';
import { DebtViewComponent } from './components/debt-view/debt-view.component';
import { LoginComponent } from './components/login/login.component';
import { MyDebtsComponent } from './components/my-debts/my-debts.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserGuardGuard } from './guards/user-guard.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [UserGuardGuard] },
  { path: 'admin-dashboard', component: DashboardComponent, canActivate: [UserGuardGuard] },
  { path: 'debtview', component: DebtViewComponent, canActivate: [UserGuardGuard] },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'mydebt', component: MyDebtsComponent },
  { path: 'debtregistration', component: DebtRegistrationComponent, canActivate: [UserGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'newdebt', component: DebtCreationComponent, canActivate: [UserGuardGuard] },





  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
