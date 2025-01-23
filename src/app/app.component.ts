import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  private http = inject(HttpClient);

  countrySearch: string = '';
  stateSearch: string = '';
  citySearch: string = '';
  zipSearch: string = '';

  countries: any[] = [];
  filteredCountries: any[] = [];
  
  states: any[] = [];
  filteredStates: any[] = [];
  
  cities: any[] = [];
  filteredCities: any[] = [];
  
  zipCodes: any[] = [];
  filteredZipCodes: any[] = [];

  selectedCountry: any;
  selectedState: any;
  selectedCity: any;
  selectedZipCode: any;

  itemsToShowCountries: number = 10;
  itemsToShowStates: number = 10;
  itemsToShowCities: number = 10;
  itemsToShowZipCodes: number = 10;

  constructor() {
    this.getCountries();
  }

  getCountries(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/api/countries/').subscribe(data => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  getStates(countryId: number): void {
    this.selectedCountry = this.countries.find(c => c.id === countryId);
    this.http.get<any[]>(`http://127.0.0.1:8000/api/states/?country_id=${countryId}`).subscribe(data => {
      this.states = data;
      this.filteredStates = data;
      this.selectedState = null;
      this.selectedCity = null;
      this.zipCodes = [];
      this.filteredZipCodes = [];
      this.itemsToShowStates = 10;
    });
  }

  getCities(stateId: number): void {
    this.selectedState = this.states.find(s => s.id === stateId);
    this.http.get<any[]>(`http://127.0.0.1:8000/api/cities/?state_id=${stateId}`).subscribe(data => {
      this.cities = data;
      this.filteredCities = data;
      this.selectedCity = null;
      this.zipCodes = [];
      this.filteredZipCodes = [];
      this.itemsToShowCities = 10;
    });
  }

  getZipCodes(cityId: number): void {
    this.selectedCity = this.cities.find(c => c.id === cityId);
    this.http.get<any[]>(`http://127.0.0.1:8000/api/locations/?city_id=${cityId}`).subscribe(data => {
      this.zipCodes = data;
      this.filteredZipCodes = data;
      this.itemsToShowZipCodes = 10;
    });
  }

  filterCountries(): void {
    this.filteredCountries = this.countries.filter(country => 
      country.name.toLowerCase().includes(this.countrySearch.toLowerCase())
    );
    this.itemsToShowCountries = 10;
  }

  filterStates(): void {
    this.filteredStates = this.states.filter(state => 
      state.name.toLowerCase().includes(this.stateSearch.toLowerCase())
    );
    this.itemsToShowStates = 10; 
  }

  filterCities(): void {
    this.filteredCities = this.cities.filter(city => 
      city.name.toLowerCase().includes(this.citySearch.toLowerCase())
    );
    this.itemsToShowCities = 10;
  }

  filterZipCodes(): void {
    this.filteredZipCodes = this.zipCodes.filter(zip => 
      zip.zip_code.toLowerCase().includes(this.zipSearch.toLowerCase())
    );
    this.itemsToShowZipCodes = 10;
  }

  showMoreCountries(): void {
    this.itemsToShowCountries += 10;
  }

  showMoreStates(): void {
    this.itemsToShowStates += 10;
  }

  showMoreCities(): void {
    this.itemsToShowCities += 10;
  }

  showMoreZipCodes(): void {
    this.itemsToShowZipCodes += 10;
  }
}
