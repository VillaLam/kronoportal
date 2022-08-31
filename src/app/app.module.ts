import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './components/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { DebtCardComponent } from './components/debt-card/debt-card.component';
import { DebtViewComponent } from './components/debt-view/debt-view.component';
import { TempInterfaceComponent } from './components/temp-interface/temp-interface.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MyDebtsComponent } from './components/my-debts/my-debts.component';

import { MyDebtCardComponent } from './components/my-debt-card/my-debt-card.component';
import { MatMenuModule } from '@angular/material/menu';
import { DebtRegistrationComponent } from './components/debt-registration/debt-registration.component';
import { MatDividerModule } from '@angular/material/divider';
import { DebtCreationComponent } from './components/debt-creation/debt-creation.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './components/home/home.component';
import {MatDatepickerModule} from '@angular/material/datepicker';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    UserCardComponent,
    UserDashboardComponent,
    DebtCardComponent,
    DebtViewComponent,
    TempInterfaceComponent,
    UserViewComponent,
    MyDebtsComponent,
    MyDebtCardComponent,
    DebtRegistrationComponent,
    DebtCreationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    NgxChartsModule,
    MatMenuModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
