import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionModel } from 'src/app/modeles/region.model';
import { CountriesService } from 'src/app/services';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.scss'],
  providers: [CountriesService]
})
export class DetailCountryComponent implements OnInit {

  code: string = "";
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private detail: CountriesService) { }

  data: RegionModel = new RegionModel();

  crncName: any;
  crncSymbol: any;
  language: any;
  nativeName: any;
  topLevelDomain: any;

  ngOnInit() {
    this.loading = true;
    this.code = this.route.snapshot.params['id'];

    this.detail.getdetails(this.code).subscribe(res => {
      this.loading = false;
      if (res.length > 0) {
        this.data = res[0];
        this.crncName = Object.values(this.data.currencies)[0].name;
        this.crncSymbol = Object.values(this.data.currencies)[0].symbol;
        this.language = Object.values(this.data.languages)[0];
        this.nativeName = Object.values(this.data.name.nativeName)[0].official;
        this.topLevelDomain = this.data.tld[0];
        // console.log(Object.keys(this.data.name.nativeName)[0]);
      }
    })

  }

}
