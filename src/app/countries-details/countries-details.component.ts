import { Component, OnInit, Input } from '@angular/core';
import { ICountry } from '../model/country';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.css']
})
export class CountriesDetailsComponent implements OnInit {

  imageWidth: number = 500;
  imageMargin: number;
  title: string;
  @Input() country: ICountry;
  navStart: Observable<ICountry>;

  constructor() { }

  ngOnInit(): void {
    this.title = this.country.name;
    console.log(this.country);
  }

}
