import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes-angular-practice-one';
  phone: {
    name: string;
    brand: string;
    processor: string;
    ram: string;
    battery: string;
    os: string;
  };
  smartphones = [
    {
      name: 'Oneplus 7T pro',
      brand: 'oneplus',
      processor: 'snapdragon 855',
      ram: '8gb',
      battery: '4200mah',
      os: 'oxygen',
    },
    {
      name: 'Apple iPhone 11 Pro',
      brand: 'apple',
      processor: 'snapdragon 865',
      ram: '16gb',
      battery: '6000mah',
      os: 'ios',
    },
    {
      name: 'Samsung Galaxy S10',
      brand: 'samsung',
      processor: 'snapdragon 845',
      ram: '8gb',
      battery: '6000mah',
      os: 'exynos',
    },
    {
      name: 'Oneplus 6T pro',
      brand: 'oneplus',
      processor: 'snapdragon 855',
      ram: '16gb',
      battery: '5000mah',
      os: 'oxygen',
    },
    {
      name: 'Samsung Galaxy S9',
      brand: 'samsung',
      processor: 'snapdragon 825',
      ram: '16gb',
      battery: '4200mah',
      os: 'exynos',
    },
  ];
}
