import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MovimentoConto{
  public description: string = "";
  public amount: number |undefined;
  public id: number|undefined;
}
