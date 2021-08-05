import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root'
})
export class MobileServiceService {

constructor(
  public http: HttpClient
) { }
readonly RES_API="https://api.apify.com/v2/key-value-stores/Dk3WYwoH9GqWLc6Cm/records/LATEST?fbclid=IwAR3kMexjDTFRCJKJGzXsf7yLefEy_X5rr9HiFdoLcAxVcLVto69wLqGxXqw";
public getListCategory():Observable<any>{
  return this.http.get(this.RES_API);
}

}
