import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/auth.service';

import { CarSaleService } from './car-sale.service';

describe('CarSaleService', () => {
  let service: CarSaleService;
  let authService: AuthService;
  let httpTestCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ],
      providers: [ AuthService, HttpClient ]
    });
    service = TestBed.inject(CarSaleService);
    authService = TestBed.inject(AuthService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  });


  it('[CarSaleService-create ] - should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('[CarSaleService-getExchangeRate ] - should check the getExchangeRate',
    () => {
      const testData = [
        {
          "id": 55,
          "make": "Volvo",
          "model": "850",
          "yearModel": 1995,
          "price": 25762.08,
          "licensed": true,
          "dateAdded": "2017-10-03T00:00:00",
          "warehouseId": 3,
          "warehouseName": "Warehouse C",
          "carLocation": "Suid wing"
        },
        {
          "id": 22,
          "make": "Infiniti",
          "model": "I",
          "yearModel": 2002,
          "price": 6910.16,
          "licensed": false,
          "dateAdded": "2017-10-15T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 52,
          "make": "Porsche",
          "model": "Cayenne",
          "yearModel": 2011,
          "price": 17066.31,
          "licensed": true,
          "dateAdded": "2017-10-19T00:00:00",
          "warehouseId": 3,
          "warehouseName": "Warehouse C",
          "carLocation": "Suid wing"
        },
        {
          "id": 71,
          "make": "Chrysler",
          "model": "LHS",
          "yearModel": 2001,
          "price": 29444.71,
          "licensed": false,
          "dateAdded": "2017-10-25T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 72,
          "make": "Porsche",
          "model": "944",
          "yearModel": 1984,
          "price": 7396.95,
          "licensed": true,
          "dateAdded": "2017-10-26T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 26,
          "make": "BMW",
          "model": "7 Series",
          "yearModel": 1998,
          "price": 29069.52,
          "licensed": false,
          "dateAdded": "2017-10-29T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 36,
          "make": "Chevrolet",
          "model": "Blazer",
          "yearModel": 1994,
          "price": 14835.48,
          "licensed": false,
          "dateAdded": "2017-11-10T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 15,
          "make": "Lexus",
          "model": "GX",
          "yearModel": 2005,
          "price": 27395.26,
          "licensed": false,
          "dateAdded": "2017-11-12T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 9,
          "make": "Infiniti",
          "model": "Q",
          "yearModel": 1995,
          "price": 6103.4,
          "licensed": false,
          "dateAdded": "2017-11-13T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 20,
          "make": "Maserati",
          "model": "Coupe",
          "yearModel": 2005,
          "price": 19957.71,
          "licensed": false,
          "dateAdded": "2017-11-14T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 17,
          "make": "Dodge",
          "model": "Caravan",
          "yearModel": 1995,
          "price": 16145.27,
          "licensed": false,
          "dateAdded": "2017-11-25T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 56,
          "make": "Honda",
          "model": "del Sol",
          "yearModel": 1994,
          "price": 18840.96,
          "licensed": true,
          "dateAdded": "2017-11-25T00:00:00",
          "warehouseId": 3,
          "warehouseName": "Warehouse C",
          "carLocation": "Suid wing"
        },
        {
          "id": 61,
          "make": "Saab",
          "model": "900",
          "yearModel": 1987,
          "price": 8771,
          "licensed": false,
          "dateAdded": "2017-12-01T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 21,
          "make": "Isuzu",
          "model": "Rodeo",
          "yearModel": 1998,
          "price": 6303.99,
          "licensed": false,
          "dateAdded": "2017-12-03T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 28,
          "make": "Audi",
          "model": "A8",
          "yearModel": 1999,
          "price": 16047.9,
          "licensed": false,
          "dateAdded": "2017-12-05T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 45,
          "make": "Pontiac",
          "model": "Sunfire",
          "yearModel": 1997,
          "price": 28489.1,
          "licensed": false,
          "dateAdded": "2017-12-05T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 33,
          "make": "Dodge",
          "model": "Dakota",
          "yearModel": 2009,
          "price": 14479.37,
          "licensed": false,
          "dateAdded": "2017-12-12T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 30,
          "make": "Acura",
          "model": "RL",
          "yearModel": 2010,
          "price": 13232.13,
          "licensed": true,
          "dateAdded": "2017-12-16T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 73,
          "make": "Subaru",
          "model": "Legacy",
          "yearModel": 2010,
          "price": 24491.8,
          "licensed": false,
          "dateAdded": "2017-12-26T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 78,
          "make": "Pontiac",
          "model": "Montana",
          "yearModel": 2000,
          "price": 11221.14,
          "licensed": false,
          "dateAdded": "2018-01-04T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 67,
          "make": "Bugatti",
          "model": "Veyron",
          "yearModel": 2009,
          "price": 8051.64,
          "licensed": false,
          "dateAdded": "2018-01-10T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 41,
          "make": "Pontiac",
          "model": "Grand Prix",
          "yearModel": 1975,
          "price": 11600.74,
          "licensed": true,
          "dateAdded": "2018-01-14T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 19,
          "make": "Dodge",
          "model": "Ram 1500",
          "yearModel": 2004,
          "price": 9977.65,
          "licensed": true,
          "dateAdded": "2018-01-18T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 12,
          "make": "Cadillac",
          "model": "DeVille",
          "yearModel": 1993,
          "price": 18371.53,
          "licensed": false,
          "dateAdded": "2018-01-24T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 2,
          "make": "Chevrolet",
          "model": "Corvette",
          "yearModel": 2004,
          "price": 20019.64,
          "licensed": true,
          "dateAdded": "2018-01-27T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 7,
          "make": "Cadillac",
          "model": "Escalade ESV",
          "yearModel": 2008,
          "price": 24925.75,
          "licensed": false,
          "dateAdded": "2018-01-29T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 10,
          "make": "Ford",
          "model": "Mustang",
          "yearModel": 1993,
          "price": 18992.7,
          "licensed": false,
          "dateAdded": "2018-01-29T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 24,
          "make": "Toyota",
          "model": "Corolla",
          "yearModel": 2009,
          "price": 23732.11,
          "licensed": false,
          "dateAdded": "2018-02-13T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 70,
          "make": "Volvo",
          "model": "960",
          "yearModel": 1993,
          "price": 7316.93,
          "licensed": true,
          "dateAdded": "2018-02-15T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 31,
          "make": "Mitsubishi",
          "model": "Chariot",
          "yearModel": 1987,
          "price": 15665.23,
          "licensed": false,
          "dateAdded": "2018-02-21T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 60,
          "make": "Volkswagen",
          "model": "Touareg 2",
          "yearModel": 2008,
          "price": 15611.22,
          "licensed": true,
          "dateAdded": "2018-02-22T00:00:00",
          "warehouseId": 3,
          "warehouseName": "Warehouse C",
          "carLocation": "Suid wing"
        },
        {
          "id": 44,
          "make": "Cadillac",
          "model": "STS",
          "yearModel": 2007,
          "price": 13740.2,
          "licensed": false,
          "dateAdded": "2018-02-25T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 62,
          "make": "Mazda",
          "model": "B-Series",
          "yearModel": 1998,
          "price": 23407.59,
          "licensed": false,
          "dateAdded": "2018-03-01T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 69,
          "make": "Land Rover",
          "model": "Discovery Series II",
          "yearModel": 2001,
          "price": 18620.19,
          "licensed": false,
          "dateAdded": "2018-03-03T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 66,
          "make": "GMC",
          "model": "Sonoma",
          "yearModel": 2004,
          "price": 18248.21,
          "licensed": false,
          "dateAdded": "2018-03-09T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 35,
          "make": "Kia",
          "model": "Sportage",
          "yearModel": 2001,
          "price": 27106.47,
          "licensed": false,
          "dateAdded": "2018-03-14T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 59,
          "make": "GMC",
          "model": "Envoy XL",
          "yearModel": 2002,
          "price": 18983.52,
          "licensed": true,
          "dateAdded": "2018-03-14T00:00:00",
          "warehouseId": 3,
          "warehouseName": "Warehouse C",
          "carLocation": "Suid wing"
        },
        {
          "id": 75,
          "make": "Buick",
          "model": "Skyhawk",
          "yearModel": 1985,
          "price": 10567.27,
          "licensed": false,
          "dateAdded": "2018-03-21T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 4,
          "make": "Infiniti",
          "model": "FX",
          "yearModel": 2010,
          "price": 8541.62,
          "licensed": true,
          "dateAdded": "2018-03-23T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 76,
          "make": "GMC",
          "model": "Envoy XUV",
          "yearModel": 2004,
          "price": 20997.71,
          "licensed": true,
          "dateAdded": "2018-03-27T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 13,
          "make": "Acura",
          "model": "NSX",
          "yearModel": 2001,
          "price": 23175.76,
          "licensed": false,
          "dateAdded": "2018-03-28T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 65,
          "make": "Toyota",
          "model": "Tacoma",
          "yearModel": 1997,
          "price": 11597.18,
          "licensed": false,
          "dateAdded": "2018-03-30T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 25,
          "make": "Acura",
          "model": "MDX",
          "yearModel": 2011,
          "price": 8487.19,
          "licensed": false,
          "dateAdded": "2018-04-18T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 40,
          "make": "Volkswagen",
          "model": "Jetta",
          "yearModel": 2006,
          "price": 25469.49,
          "licensed": false,
          "dateAdded": "2018-04-23T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 74,
          "make": "Volvo",
          "model": "XC90",
          "yearModel": 2003,
          "price": 29009.65,
          "licensed": true,
          "dateAdded": "2018-04-24T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 63,
          "make": "GMC",
          "model": "Sierra 3500",
          "yearModel": 2012,
          "price": 5869.23,
          "licensed": true,
          "dateAdded": "2018-04-27T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 68,
          "make": "Dodge",
          "model": "Ram 1500 Club",
          "yearModel": 1996,
          "price": 14008.3,
          "licensed": false,
          "dateAdded": "2018-05-01T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 79,
          "make": "Lexus",
          "model": "RX",
          "yearModel": 2002,
          "price": 23194.01,
          "licensed": false,
          "dateAdded": "2018-05-02T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 48,
          "make": "Suzuki",
          "model": "Forenza",
          "yearModel": 2005,
          "price": 28834.26,
          "licensed": false,
          "dateAdded": "2018-05-09T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 14,
          "make": "Ford",
          "model": "Econoline E250",
          "yearModel": 1994,
          "price": 26605.54,
          "licensed": true,
          "dateAdded": "2018-05-13T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 39,
          "make": "Mercedes-Benz",
          "model": "CL-Class",
          "yearModel": 2002,
          "price": 23494.78,
          "licensed": true,
          "dateAdded": "2018-05-24T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 54,
          "make": "Mitsubishi",
          "model": "RVR",
          "yearModel": 1995,
          "price": 22560.18,
          "licensed": false,
          "dateAdded": "2018-05-25T00:00:00",
          "warehouseId": 3,
          "warehouseName": "Warehouse C",
          "carLocation": "Suid wing"
        },
        {
          "id": 34,
          "make": "Mercury",
          "model": "Grand Marquis",
          "yearModel": 1996,
          "price": 20614.72,
          "licensed": false,
          "dateAdded": "2018-05-26T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 64,
          "make": "Chevrolet",
          "model": "Corvette",
          "yearModel": 1964,
          "price": 16630.67,
          "licensed": true,
          "dateAdded": "2018-05-31T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 29,
          "make": "Nissan",
          "model": "Murano",
          "yearModel": 2005,
          "price": 25859.78,
          "licensed": false,
          "dateAdded": "2018-06-06T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 49,
          "make": "Saab",
          "model": "9-7X",
          "yearModel": 2005,
          "price": 25975.68,
          "licensed": false,
          "dateAdded": "2018-06-07T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 42,
          "make": "Infiniti",
          "model": "FX",
          "yearModel": 2012,
          "price": 22000.62,
          "licensed": true,
          "dateAdded": "2018-06-09T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 8,
          "make": "Mitsubishi",
          "model": "Pajero",
          "yearModel": 2002,
          "price": 28619.45,
          "licensed": false,
          "dateAdded": "2018-06-12T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 3,
          "make": "Ford",
          "model": "Expedition EL",
          "yearModel": 2008,
          "price": 27323.42,
          "licensed": false,
          "dateAdded": "2018-07-03T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 5,
          "make": "GMC",
          "model": "Safari",
          "yearModel": 1998,
          "price": 14772.5,
          "licensed": false,
          "dateAdded": "2018-07-04T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 6,
          "make": "Plymouth",
          "model": "Colt Vista",
          "yearModel": 1994,
          "price": 6642.45,
          "licensed": true,
          "dateAdded": "2018-07-11T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 50,
          "make": "Ford",
          "model": "Fusion",
          "yearModel": 2012,
          "price": 28091.96,
          "licensed": false,
          "dateAdded": "2018-07-15T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 27,
          "make": "Nissan",
          "model": "Maxima",
          "yearModel": 2004,
          "price": 11187.68,
          "licensed": false,
          "dateAdded": "2018-07-16T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 77,
          "make": "Volvo",
          "model": "S60",
          "yearModel": 2009,
          "price": 28614.95,
          "licensed": false,
          "dateAdded": "2018-07-25T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 11,
          "make": "Chevrolet",
          "model": "G-Series 1500",
          "yearModel": 1997,
          "price": 23362.41,
          "licensed": false,
          "dateAdded": "2018-07-30T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 46,
          "make": "Cadillac",
          "model": "SRX",
          "yearModel": 2004,
          "price": 26750.38,
          "licensed": true,
          "dateAdded": "2018-08-07T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 53,
          "make": "Mercedes-Benz",
          "model": "SL-Class",
          "yearModel": 2005,
          "price": 14066.06,
          "licensed": false,
          "dateAdded": "2018-08-08T00:00:00",
          "warehouseId": 3,
          "warehouseName": "Warehouse C",
          "carLocation": "Suid wing"
        },
        {
          "id": 57,
          "make": "Infiniti",
          "model": "Q",
          "yearModel": 1996,
          "price": 28773.14,
          "licensed": true,
          "dateAdded": "2018-08-09T00:00:00",
          "warehouseId": 3,
          "warehouseName": "Warehouse C",
          "carLocation": "Suid wing"
        },
        {
          "id": 18,
          "make": "Dodge",
          "model": "Dynasty",
          "yearModel": 1992,
          "price": 15103.84,
          "licensed": true,
          "dateAdded": "2018-08-12T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 23,
          "make": "Nissan",
          "model": "Altima",
          "yearModel": 1994,
          "price": 8252.66,
          "licensed": false,
          "dateAdded": "2018-08-12T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 58,
          "make": "Mercedes-Benz",
          "model": "500E",
          "yearModel": 1992,
          "price": 17141.08,
          "licensed": true,
          "dateAdded": "2018-08-13T00:00:00",
          "warehouseId": 3,
          "warehouseName": "Warehouse C",
          "carLocation": "Suid wing"
        },
        {
          "id": 37,
          "make": "Mercedes-Benz",
          "model": "SL-Class",
          "yearModel": 1994,
          "price": 27717.28,
          "licensed": false,
          "dateAdded": "2018-08-17T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 47,
          "make": "Land Rover",
          "model": "Freelander",
          "yearModel": 2004,
          "price": 21770.59,
          "licensed": false,
          "dateAdded": "2018-09-01T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 80,
          "make": "Lexus",
          "model": "RX",
          "yearModel": 2000,
          "price": 17805.45,
          "licensed": false,
          "dateAdded": "2018-09-11T00:00:00",
          "warehouseId": 4,
          "warehouseName": "Warehouse D",
          "carLocation": "Suid wing"
        },
        {
          "id": 38,
          "make": "Honda",
          "model": "Civic Si",
          "yearModel": 2003,
          "price": 18569.86,
          "licensed": true,
          "dateAdded": "2018-09-12T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 1,
          "make": "Volkswagen",
          "model": "Jetta III",
          "yearModel": 1995,
          "price": 12947.52,
          "licensed": true,
          "dateAdded": "2018-09-18T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 32,
          "make": "GMC",
          "model": "3500 Club Coupe",
          "yearModel": 1992,
          "price": 18129.37,
          "licensed": true,
          "dateAdded": "2018-09-23T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        },
        {
          "id": 51,
          "make": "Cadillac",
          "model": "Escalade",
          "yearModel": 2005,
          "price": 7429.18,
          "licensed": true,
          "dateAdded": "2018-09-26T00:00:00",
          "warehouseId": 3,
          "warehouseName": "Warehouse C",
          "carLocation": "Suid wing"
        },
        {
          "id": 16,
          "make": "Dodge",
          "model": "Ram Van 3500",
          "yearModel": 1999,
          "price": 6244.51,
          "licensed": true,
          "dateAdded": "2018-09-28T00:00:00",
          "warehouseId": 1,
          "warehouseName": "Warehouse A",
          "carLocation": "West wing"
        },
        {
          "id": 43,
          "make": "Jaguar",
          "model": "XK",
          "yearModel": 2006,
          "price": 10260.79,
          "licensed": true,
          "dateAdded": "2018-09-28T00:00:00",
          "warehouseId": 2,
          "warehouseName": "Warehouse B",
          "carLocation": "East wing"
        }
      ];
      authService.apiUrl = 'https://localhost:7062/';
      service.getCarList().subscribe((resp: any) => {
        expect(testData).toEqual(resp);
      });
      const req = httpTestCtrl.expectOne(`${authService.apiUrl}vehicledetails`);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');
      req.flush(testData);
    });
});
