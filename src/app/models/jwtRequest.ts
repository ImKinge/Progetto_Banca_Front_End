import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class JwtRequest {

  constructor() {
  }

  private username : string = "";
  private password : string = "";


  getUsername(): string {
    return this.username;
  }

  setUsername(value: string) {
    this.username = value;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(value: string) {
    this.password = value;
  }
}
