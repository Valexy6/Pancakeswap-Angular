import { Component, OnInit } from '@angular/core';
import { ISecondaryMenuItem } from 'src/app/models/SecondaryMenuItem';

@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.css']
})
export class EarnComponent {
  menuItems: ISecondaryMenuItem[] = [{ name: 'Farms', url: 'farms' }, { name: 'Pools', url: 'pools' }]
}
