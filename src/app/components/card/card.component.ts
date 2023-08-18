import { Component, Input, OnInit } from '@angular/core';
import { RegionModel } from 'src/app/modeles/region.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  loading: boolean = true;

  @Input() data: RegionModel = new RegionModel();

  loaded() {
    this.loading = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
