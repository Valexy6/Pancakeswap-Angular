import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.css']
})
export class ModalSettingsComponent implements OnInit {
  isVisible: boolean = false;

  constructor() { }
    
  ngOnInit(): void {
  }

  modalToggle() {
    this.isVisible = !this.isVisible;
  }

}
