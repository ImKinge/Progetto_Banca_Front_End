import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class RegisterRequest {

    public id : string = "";
    public name :string = "";
    public surname :string = "";
    public dateOfBirth: Date = new Date();
    public email :string = "";
    public infoPhone :number = 0;
    public address :string = "";


}
