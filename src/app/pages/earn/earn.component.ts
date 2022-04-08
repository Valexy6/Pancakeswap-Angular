import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/models/SecondaryMenuItem';

@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.css']
})
export class EarnComponent {
  menuItems: ILink[] = [{ name: 'Farms', url: 'farms' }, { name: 'Pools', url: 'pools' }]
}
