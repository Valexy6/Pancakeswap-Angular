import { Component, OnInit } from '@angular/core';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  page = 1;

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  constructor() {}

  ngOnInit(): void {}
}
