import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../services';
import { RegionModel } from '../modeles/region.model';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CountriesService]
})
export class HomeComponent implements OnInit {

  constructor(private cntry: CountriesService, private rgin: CountriesService) { }

  allView: boolean = false;
  regionView: boolean = false;
  countries: Array<RegionModel> = new Array<RegionModel>();
  listRegion: Array<RegionModel> = new Array<RegionModel>();
  selectAllUser: boolean = true;
  selectRegionUser: string = '';
  notFound: boolean = false;
  loading: boolean = false;
  loadingSearch: boolean = false;
  search: string = "";
  search$: Subject<string> = new Subject<string>();

  @ViewChild('input')
  inputElem: any;

  ngOnInit(): void {
    this.getListCountries();
    this.search$.pipe(
      debounceTime(800),
      distinctUntilChanged()
    ).subscribe(res => {

      if (this.inputElem.nativeElement.value) {
        this.loading = true;
        this.loadingSearch = true;
        if (this.selectAllUser) {
          this.countries = new Array<RegionModel>();
          this.cntry.searchByName(res).subscribe(data => {
            this.countries = data;
            this.notFound = false;
            this.loading = false;
            this.loadingSearch = false;
          },
          error => {
            console.log('Error');
            this.notFound = true;
            this.loading = false;
            this.loadingSearch = false;
          })
        }
        if (this.selectRegionUser) {
          this.listRegion = new Array<RegionModel>();
          this.rgin.searchByName(res).subscribe(data => {
            this.listRegion = data;
            this.notFound = false;
            this.loading = false;
            this.loadingSearch = false;
          },
          error => {
            console.log('Error');
            this.notFound = true;
            this.loading = false;
            this.loadingSearch = false;
          })
        }
      } else {
        if (this.selectAllUser) {
          this.getListCountries();
        }
        if (this.selectRegionUser) {
          this.getListRegion();
        }
      }

    })
  }

  getListCountries() {
    this.notFound = false;
    this.allView = true;
    this.regionView = false;
    this.countries = new Array<RegionModel>();
    this.loading = true;
    this.cntry.getCountries().subscribe(res => {
      if (res.length > 0) {
        this.countries = res;
        // console.log(this.countries);
      }
      else {
        alert('Not Responding Countries');
      }
      this.loading = false;
    })
  }

  getListRegion(region: string = this.selectRegionUser) {
    this.notFound = false;
    this.allView = false;
    this.regionView = true;
    this.listRegion = new Array<RegionModel>();
    this.loading = true;
    this.rgin.getRegion(region).subscribe(res => {
      if (res.length > 0) {
        this.listRegion = res;
      }
      else {
        alert('Not Responding Regions');
      }
      this.loading = false;
    })
  }

  selectAll() {
    this.selectAllUser = true;
    this.selectRegionUser = '';
    this.getListCountries();
  }

  selectRegion(select: string) {
    this.selectAllUser = false;
    this.selectRegionUser = select;
    this.getListRegion(select);
  }

}
