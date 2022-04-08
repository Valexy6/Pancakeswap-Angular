import { Component, OnInit } from '@angular/core';
import { FarmsData } from 'data/farms.data';
import { IFarm } from 'src/app/models/Farms';

@Component({
  selector: 'app-earn-farms',
  templateUrl: './earn-farms.component.html',
  styleUrls: ['./earn-farms.component.css']
})
export class EarnFarmsComponent implements OnInit {
  farms: IFarm[] = [...FarmsData];
  constructor() { }

  ngOnInit(): void {
  }

}
