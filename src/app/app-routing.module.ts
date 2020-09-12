import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CalcComponent } from './calc/calc.component';
import { ErrorComponent } from './error/error.component';
import { CountriesListComponent } from './countries-list/countries-list.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'calc', component: CalcComponent },
  {path: 'calc', component: CalcComponent },
  {path: 'countries', component: CountriesListComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
