import { Component, Input, OnInit } from '@angular/core';
import { IButton } from 'src/app/models/Button';

@Component({
  selector: 'app-general-button',
  templateUrl: './general-button.component.html',
  styleUrls: ['./general-button.component.css']
})
export class GeneralButtonComponent implements OnInit {
  _button: IButton = {
    class: 'button-standard',
    text: '',
    imgVisible: true
  }

  @Input() set button(value: Partial<IButton>) {
    this._button = {...this._button, ...value};
  }

  constructor() { }

  ngOnInit(): void {
  }

}
