import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.css']
})
export class FooterContainerComponent implements OnInit {
  colorLink: string = 'var(--mauve)';
  isFooter: boolean = true;

  @Input() langSelected!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}