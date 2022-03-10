import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() scrollDeltaY!: number;
  @Output() setLang = new EventEmitter<string>();
  
  colorLink: string = 'var(--light-purple)';
  navbar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
