import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDark: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  changeMode() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.document.body.classList.add('dark-mode');
    } else {
      this.document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('Theme', this.isDark ? 'dark' : 'default');
  }

  ngOnInit(): void {
    if (localStorage.getItem('Theme') == 'dark') {
      this.changeMode();
    }
  }

}
