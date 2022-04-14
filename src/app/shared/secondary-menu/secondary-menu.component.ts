import { Component, Input, OnInit } from '@angular/core';
import { ILink } from 'src/app/models/SecondaryMenuItem';

@Component({
  selector: 'app-secondary-menu',
  templateUrl: './secondary-menu.component.html',
  styleUrls: ['./secondary-menu.component.css']
})
export class SecondaryMenuComponent {
  @Input() items: ILink[] = [];
}
