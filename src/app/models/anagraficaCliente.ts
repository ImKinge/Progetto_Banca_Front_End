import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class AnagraficaCliente {
    public id: string="";
    public name :string="";
    public surname :string="";
    public dateOfBirth: Date|undefined;
    public email :string="";
    public infoPhone :number=0;
    public address :string="";


}
