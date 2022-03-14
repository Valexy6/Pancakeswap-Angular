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
  isNavbar: boolean = true;

  isSubmenuVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  openBottomNavbar() {
    document.body.style.overflow = 'hidden';
    this.isSubmenuVisible = true;
  }

  closeBottomNavbar() {
    document.body.style.overflow = 'overlay';
    this.isSubmenuVisible = false;
  }

}
