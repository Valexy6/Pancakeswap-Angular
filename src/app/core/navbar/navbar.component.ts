import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  // subMenuVisible: string = 'block';

  constructor() {}

  ngOnInit(): void {
  }

  openBottomNavbar() {
    document.body.style.overflow = 'hidden';
  }

  closeBottomNavbar() {
    document.body.style.overflow = 'overlay';
  }

}
