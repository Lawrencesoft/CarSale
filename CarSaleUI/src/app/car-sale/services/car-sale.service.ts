import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarSaleService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getCarList(): Observable<any> {
    const url = `${this.authService.apiUrl}vehicledetails`;
    return this.http
      .get(url)
      .pipe(response => {
        return response;
      });
  }
}
