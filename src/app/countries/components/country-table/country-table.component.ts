import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {
  /* Propiedades */
  @Input()
  public countries: Country[] = [];
  @Input()
  public userAlreadySearchedACountry: boolean;

  /* Metodos */
  constructor() {
    this.userAlreadySearchedACountry = false;
  }

}
