import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { District } from '../types/district';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private readonly httpClient: HttpClient) { }

  public getDistricts(): Observable<District[]> {
    return this.httpClient.get(`${environment.backend.api}/district`).pipe(
      map(
        (res: any) => {
          return res.map(
            (district: any) => <District>district
          );
        }
      )
    );
  }
}
