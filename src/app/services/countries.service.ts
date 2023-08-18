import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURI } from 'src/app/api-uri';
import { RegionModel } from '../modeles/region.model';

@Injectable()
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Array<RegionModel>>(APIURI.region.getCountries);
  }

  getRegion(region: string) {
    return this.http.get<Array<RegionModel>>(APIURI.region.getRegion + `${region}`);
  }

  searchByName(name: string) {
    return this.http.get<Array<RegionModel>>(APIURI.region.name + `${name}`);
  }

  getdetails(code: string) {
    return this.http.get<Array<RegionModel>>(APIURI.region.getdetails + `${code}`);
  }
}
