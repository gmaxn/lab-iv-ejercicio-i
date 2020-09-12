import { Component, OnInit } from '@angular/core';
import { ICountry, ICurrencies } from '../model/country'
import { CountriesService } from '../services/countries/countries.service'
@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  imageWidth: number = 100;
  imageMargin: number = 5;
  showImage: boolean = false;
  errorMessage: string;

  _filterTerm: string;

  get filterTerm(): string {
    return this._filterTerm;
  }

  set filterTerm(value: string) {
    this._filterTerm = value;
    this.filteredCountries = this.filterTerm ? this.performFilter(this._filterTerm) : this.countries;
  }

  filteredCountries: ICountry[];
  countries: ICountry[];

  constructor(private countriesService: CountriesService) {
  }
  
  ngOnInit(): void {
    this.countriesService.getProducts().subscribe({
      next: countries => { 
        this.countries = countries;
        this.filteredCountries = this.countries;
      }, 
      error: err => this.errorMessage = err
    });
  }

  onNotify(message: string): void {
    this.filterTerm = message;
  }

  performFilter(filterBy: string): ICountry[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.countries.filter((country: ICountry) =>
    country.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
