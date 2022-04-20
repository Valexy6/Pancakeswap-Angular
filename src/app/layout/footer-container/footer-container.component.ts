import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.css']
})
export class FooterContainerComponent implements OnInit {
  @Input() langSelected!: string;
  @Input() isDarkModeOn!: boolean;

  colorLink: string = 'var(--mauve)';
  isFooter: boolean = true;
  
  languages: string[] = [
    "English",
    "Bahasa Indonesia",
    "中文",
    "Tiếng Việt",
    "Italiano",
    "русский",
    "Türkiye",
    "Português",
    "Español",
    "日本語",
    "Français",
    "Datch",
    "Filipino",
    "ქართული ენა",
    "Announcements",
  ]

  constructor(private router: Router) { }

  ngOnInit(): void { }
}
