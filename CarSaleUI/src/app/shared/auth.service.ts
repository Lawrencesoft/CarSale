import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public isLoggedIn!: boolean;
  public apiUrl!: string;
  public apiKey!: string;
}
