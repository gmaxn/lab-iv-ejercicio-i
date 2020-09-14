import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesGirdComponent } from './countries-list/grid/countries-gird/countries-gird.component';
import { MultiselectorDropdownComponent } from './shared/multiselector-dropdown/multiselector-dropdown.component';
import { BetweenRangeComponent } from './shared/between-range/between-range/between-range.component';
import { CountriesDetailsComponent } from './countries-details/countries-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    PageNotFoundComponent,
    SideNavComponent,
    NavbarComponent,
    CountriesListComponent,
    CountriesGirdComponent,
    MultiselectorDropdownComponent,
    BetweenRangeComponent,
    CountriesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
