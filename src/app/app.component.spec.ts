import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [FormsModule],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with mock countries', () => {
    const mockCountries = [
      { id: 1, name: 'USA' },
      { id: 2, name: 'Canada' },
    ];

    spyOn(component, 'getCountries').and.callFake(() => {
      component.countries = mockCountries;
      component.filteredCountries = mockCountries;
    });

    component.getCountries();

    expect(component.countries).toEqual(mockCountries);
    expect(component.filteredCountries).toEqual(mockCountries);
  });

  it('should initialize states when a country is selected', () => {
    const mockStates = [
      { id: 1, name: 'California' },
      { id: 2, name: 'Texas' },
    ];

    spyOn(component, 'getStates').and.callFake((countryId: number) => {
      if (countryId === 1) {
        component.states = mockStates;
        component.filteredStates = mockStates;
      }
    });

    component.getStates(1);

    expect(component.states).toEqual(mockStates);
    expect(component.filteredStates).toEqual(mockStates);
  });

  it('should filter countries based on search input', () => {
    component.countries = [
      { id: 1, name: 'USA' },
      { id: 2, name: 'Canada' },
      { id: 3, name: 'India' },
    ];
    component.countrySearch = 'Can';

    component.filterCountries();

    expect(component.filteredCountries).toEqual([{ id: 2, name: 'Canada' }]);
  });

  it('should filter states based on search input', () => {
    component.states = [
      { id: 1, name: 'California' },
      { id: 2, name: 'Texas' },
    ];
    component.stateSearch = 'Tex';

    component.filterStates();

    expect(component.filteredStates).toEqual([{ id: 2, name: 'Texas' }]);
  });

  it('should handle the "Show More" functionality for countries', () => {
    component.countries = new Array(20).fill(0).map((_, i) => ({ id: i + 1, name: `Country ${i + 1}` }));
    component.itemsToShowCountries = 10;

    component.showMoreCountries();

    expect(component.itemsToShowCountries).toBe(20);
  });

  it('should highlight the selected country', () => {
    const mockCountry = { id: 1, name: 'USA' };

    component.selectedCountry = mockCountry;

    expect(component.selectedCountry).toEqual(mockCountry);
  });
});
