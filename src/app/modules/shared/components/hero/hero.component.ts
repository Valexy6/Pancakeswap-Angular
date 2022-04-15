import { Component, Input } from '@angular/core';
import { ILink } from 'src/app/models/SecondaryMenuItem';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: ILink = { name: '', url: '' };
  @Input() isDarkModeOn = false;
}
