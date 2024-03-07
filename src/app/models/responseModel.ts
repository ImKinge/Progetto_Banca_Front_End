import{Injectable} from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class ResponseModel {

  public httpStatus: string = ""
  public responseBody: any
  public success: boolean = false

}
