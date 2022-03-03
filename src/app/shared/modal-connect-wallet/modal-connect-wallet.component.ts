import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-connect-wallet',
  templateUrl: './modal-connect-wallet.component.html',
  styleUrls: ['./modal-connect-wallet.component.css']
})
export class ModalConnectWalletComponent implements OnInit {
  isVisible: boolean = false;

  constructor() { }
    
  ngOnInit(): void {
  }

  modalToggle() {
    this.isVisible = !this.isVisible;
  }

  hideScrollbar() {
    document.body.style.overflow = 'hidden';
  }

  showScrollbar() {
    document.body.style.overflow = 'overlay';
  }

}
